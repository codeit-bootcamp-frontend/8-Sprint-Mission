import { useEffect, useState } from "react";
import { Article } from "@/types/article";
import axios from "@/lib/axios";

import styles from "./style.module.css";

import Button from "@/components/Button";
import Search from "@/components/Search";
import Sort from "@/components/Sort";
import BestArticleList from "./components/BestArticleList/BestArticleList";
import AllArticleList from "./components/AllArticleList/AllArticleList";

function Board() {
  const [articles, setArticles] = useState<Article[]>([]);

  async function getArticles() {
    const response = await axios.get("/articles");
    setArticles(response.data.list ?? []);
    return;
  }

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <main>
      <section className={styles.section}>
        <h3 className={`${styles.sectionTitle} ${styles.best}`}>
          베스트 게시글
        </h3>
        <BestArticleList articles={articles} />
      </section>
      <section>
        <div className={styles.titleWrapper}>
          <h3 className={styles.sectionTitle}>게시글</h3>
          <Button href="" text="글쓰기" />
        </div>
        <div className={styles.filterWrapper}>
          <Search />
          <Sort articles={articles} setArticles={setArticles} />
        </div>
        <AllArticleList articles={articles} />
      </section>
    </main>
  );
}

export default Board;
