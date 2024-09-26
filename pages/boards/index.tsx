import { useEffect, useState } from "react";
import { Article } from "@/types/article";
import instance from "@/lib/instance";
import { API_PATH } from "@/lib/path";

import styles from "@/styles/boards.module.css";

import LinkButton from "@/components/Buttons/LinkButton";
import SearchForm from "@/components/SearchForm";
import Dropdown from "@/components/Dropdown";
import BestArticleList from "@/components/BestArticleList/BestArticleList";
import AllArticleList from "@/components/AllArticleList/AllArticleList";

function Board() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [bestArticles, setBestArticles] = useState<Article[]>([]);
  const [pageSize, setPageSize] = useState<number>(3);
  const [option, setOption] = useState<string>("recent");

  const dropdownOptions = [
    { label: "최신순", value: "recent" },
    { label: "좋아요순", value: "like" },
  ];

  useEffect(() => {
    const updatePageSize = () => {
      if (typeof window !== "undefined") {
        const { innerWidth } = window;
        if (innerWidth < 377) setPageSize(1);
        else if (innerWidth < 745) setPageSize(2);
        else setPageSize(3);
      }
    };
    window.addEventListener("resize", updatePageSize);

    return () => {
      window.removeEventListener("resize", updatePageSize);
    };
  }, []);

  async function getBestArticles(pageSize: number) {
    const response = await instance.get(API_PATH.articles("like", pageSize));
    setBestArticles(response.data.list ?? []);
  }

  useEffect(() => {
    getBestArticles(pageSize);
  }, [pageSize]);

  async function getArticles(option: string) {
    const response = await instance.get(API_PATH.articles(option, 10));
    setArticles(response.data.list ?? []);
  }

  useEffect(() => {
    getArticles(option);
  }, [option]);

  const handleOptionChange = (value: string) => {
    setOption(value);
  };

  return (
    <main>
      <section className={styles.section}>
        <h3 className={`${styles.sectionTitle} ${styles.best}`}>
          베스트 게시글
        </h3>
        <BestArticleList articles={bestArticles} />
      </section>

      <section>
        <div className={styles.titleWrapper}>
          <h3 className={styles.sectionTitle}>게시글</h3>
          <LinkButton href="/addboard" text="글쓰기" />
        </div>
        <div className={styles.filterWrapper}>
          <SearchForm />
          <Dropdown
            options={dropdownOptions}
            onOptionChange={handleOptionChange}
          />
        </div>
        <AllArticleList articles={articles} />
      </section>
    </main>
  );
}

export default Board;
