import { GetServerSidePropsContext } from "next";
import { Article } from "@/types/article";
import instance from "@/lib/instance";

import styles from "@/styles/search.module.css";
import Image from "next/image";
import replyEmptyImage from "@/assets/images/img_reply_empty.png";

import AllArticleList from "@/components/AllArticleList/AllArticleList";
import ReturnButton from "@/components/Buttons/ReturnButton";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { keyword } = context.query;
  const response = await instance.get(`/articles?keyword=${keyword}`);
  const articles = response.data.list ?? [];

  return {
    props: { keyword, articles },
  };
}

interface SearchBoardProps {
  keyword: string;
  articles: Article[];
}

function SearchBoard({ keyword, articles }: SearchBoardProps) {
  return (
    <main>
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>
          &quot;{keyword}&ldquo; 검색 결과
        </h3>
        {!!articles.length ? (
          <AllArticleList articles={articles} />
        ) : (
          <div className={styles.emptyMessageWrapper}>
            <Image
              src={replyEmptyImage}
              alt="일치하는 게시글이 없어요"
              width={200}
              height={200}
            />
            <div className={styles.emptyMessageText}>
              <span>&quot;{keyword}&ldquo;</span> 와 일치하는 게시글이 없어요
            </div>
          </div>
        )}
      </section>
      <ReturnButton href="/boards" text="전체 게시글로 돌아가기" />
    </main>
  );
}

export default SearchBoard;
