import Image from "next/image";
import styles from "./BestArticles.module.css";
import formatDate from "@/utils/fomatDate";
import { useState, useEffect } from "react";
import axios from "@/lib/axios";
import Article from "@/types/types";
import Spinner from "./Spinner";

const getPageSize = () => {
  if (typeof window === "undefined") {
    return 3; // 서버 사이드에서는 기본값 사용
  }
  const width = window.innerWidth;

  switch (true) {
    case width < 768:
      return 1;

    case width < 1280:
      return 2;

    default:
      return 3;
  }
};

export default function BestArticles() {
  const [pageSize, setPageSize] = useState<number>(getPageSize());
  const [articles, setArticles] = useState<Article[]>([]);

  async function getBestArticles(pageSize: number) {
    try {
      const res = await axios.get(
        `/articles?orderBy=like&pageSize=${pageSize}`
      );
      const nextArticles = res.data.results || res.data.list || [];
      setArticles(nextArticles);
    } catch (error) {
      console.error("Failed to fetch best articles", error);
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
    };

    if (typeof window !== "undefined")
      window.addEventListener("resize", handleResize);
    getBestArticles(pageSize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [pageSize]);

  if (!Array.isArray(articles) || articles.length === 0) {
    return (
      <div className={styles.loading}>
        <Spinner />
      </div>
    );
  }

  return (
    <div className={styles.bestArticles}>
      <h2 className={styles.bestTitle}>베스트 게시글</h2>
      <ul className={styles.articleList}>
        {articles.map((article) => (
          <li key={article.id} className={styles.article}>
            <div className={styles.bestImage}>
              <Image
                src="/ic_medal.png"
                alt="메달 이미지"
                width={16}
                height={16}
              />
              <p>Best</p>
            </div>
            <div className={styles.content}>
              <div className={styles.title}>{article.title}</div>
              <img
                className={styles.image}
                src={article.image}
                alt="게시글 이미지"
                width="72px"
                height="72px"
              />
            </div>
            <div className={styles.writer}>
              <div className={styles.nickname}>{article.writer.nickname}</div>
              <Image
                src="/ic_heart.png"
                width={16}
                height={16}
                alt="좋아요 아이콘"
              />
              <div className={styles.likeCount}>{article.likeCount}+</div>
              <div className={styles.createdAt}>
                {formatDate(article.createdAt)}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
