import { GetServerSidePropsContext } from "next";
import { Article } from "@/types/article";
import axios from "@/lib/axios";

import styles from "@/styles/boards.module.css";
import Image from "next/image";
import replyEmptyImage from "@/assets/images/img_reply_empty.png";

import LinkButton from "@/components/LinkButton";
import SearchForm from "@/components/SearchForm";
import Sort from "@/components/Sort";
import AllArticleList from "@/components/AllArticleList/AllArticleList";
import ReturnButton from "@/components/ReturnButton";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { keyword } = context.query;
  const response = await axios.get(`/articles?keyword=${keyword}`);
  const articles = response.data.list ?? [];

  return {
    props: { keyword, articles },
  };
}

interface BoardProps {
  keyword: string;
  articles: Article[];
}

function Board({ keyword, articles }: BoardProps) {
  return (
    <main>
      <section>
        <div className={styles.titleWrapper}>
          <h3 className={styles.sectionTitle}>게시글</h3>
          <LinkButton href="" text="글쓰기" />
        </div>
        <div className={styles.filterWrapper}>
          <SearchForm />
          {/* <Sort setArticles={setArticles} /> */}
        </div>

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
              <span>"{keyword}"</span> 와 일치하는 게시글이 없어요
            </div>
          </div>
        )}
      </section>
      <ReturnButton href="/boards" text="전체 게시글로 돌아가기" />
    </main>
  );
}

export default Board;
