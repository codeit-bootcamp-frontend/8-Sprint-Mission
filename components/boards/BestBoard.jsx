import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./BestBoard.module.scss";
import Icon from "@/components/ui/Icon";
import axios from "@/lib/axios";
import useViewport from "@/hooks/useViewport";
import Link from "next/link";
import { formatDate } from "@/utils/formatDate";

const getPageSize = () => {
  const width = window.innerWidth;
  switch (true) {
    case width < 768:
      return 1;
    case width < 1200:
      return 2;
    default:
      return 3;
  }
};

function BestBoard() {
  const [articles, setArticles] = useState([]);
  const [pageSize, setPageSize] = useState(null);
  const viewportWidth = useViewport();

  useEffect(() => {
    if (viewportWidth === 0) return;
    const newPageSize = getPageSize(viewportWidth);

    if (newPageSize !== pageSize) {
      setPageSize(newPageSize);

      const fetchBestArticles = async (size) => {
        try {
          const response = await fetch(
            `https://panda-market-api.vercel.app/articles?orderBy=like&pageSize=${size}`
          );
          const data = await response.json();
          setArticles(data.list);
        } catch (error) {
          console.error("Failed to fetch best articles:", error);
        }
      };

      fetchBestArticles(newPageSize);
    }
  }, [viewportWidth, pageSize]);

  return (
    <section className={styles["best-board-wrap"]}>
      <h2 className={styles.title}>베스트 게시글</h2>
      <ul className={styles["best-board-list"]}>
        {articles.map((article) => (
          <li key={`best-article-${article.id}`}>
            <Link href={`/boards/${article.id}`}>
              <label className={styles["best-label"]}>
                <Icon type="best" size="sm" alt="베스트 게시글" />
                Best
              </label>
              <div className={styles["title-info"]}>
                <p className={styles.title}>{article.title}</p>
                <div className={styles["thumb-wrap"]}>
                  <Image
                    fill
                    src={article.image || "/img/sample.png"}
                    alt={`${article.id}번 게시글 이미지`}
                  />
                </div>
              </div>
              <div className={styles["writer-info"]}>
                <div className={styles.writer}>{article.writer.nickname}</div>
                <div className={styles.favorite}>
                  <Icon type="heart" size="sm" />
                  <span className={styles.num}>{article.likeCount}</span>
                </div>
                <div className={styles.date}>
                  {formatDate(article.createdAt)}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default BestBoard;
