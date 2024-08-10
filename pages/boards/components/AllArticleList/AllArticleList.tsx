import { Article } from "@/types/article";
import styles from "./AllArticleList.module.css";

import Image from "next/image";
import replyEmptyImage from "@/assets/images/img_reply_empty.png";
import AllArticle from "./AllArticle";
import ReturnButton from "@/components/ReturnButton";

interface AllArticleListProps {
  articles: Article[];
}

function AllArticleList({ articles }: AllArticleListProps) {
  return (
    <div>
      {!!articles.length ? (
        articles.map((article: Article) => (
          <div key={article.id}>
            <AllArticle article={article} />
          </div>
        ))
      ) : (
        <div className={styles.emptyMessageWrapper}>
          <Image
            src={replyEmptyImage}
            alt="일치하는 게시글이 없어요"
            width={200}
            height={200}
          />
          <div className={styles.emptyMessageText}>
            검색어와 일치하는 게시글이 없어요
          </div>
          <ReturnButton text="전체 게시글로 돌아가기" />
        </div>
      )}
    </div>
  );
}

export default AllArticleList;
