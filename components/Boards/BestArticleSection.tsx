import { useEffect, useState } from "react";
import styles from "@/components/Boards/BestArticleSection.module.css";
import axios from "@/lib/axios";
import Link from "next/link";
import Image from "next/image";

type Article = {
  id: number;
  title: string;
  image?: string; // image는 optional로 지정
  writer: {
    nickname: string;
  };
  likeCount: number;
  createdAt: string; // 날짜는 보통 string으로 받음
};

export default function BestArticleSection() {
  const [articles, setArticles] = useState<Article[]>([]);

  async function getArticles() {
    const res = await axios.get("/articles");
    const nextArticles: Article[] = res.data.results;
    setArticles(nextArticles);
  }

  useEffect(() => {
    getArticles();
  }, []);

  function formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("ko-KR", options);
  }

  return (
    <div>
      <div className={styles.bestArticleHeader}>
        <span className={styles.bestArticleTitle}>베스트 게시글</span>
      </div>

      <ul className={styles["best-board-list"]}>
        {articles.map((article) => (
          <li key={`best-article-${article.id}`}>
            <Link href={`/boards/${article.id}`}>
              <label className={styles["best-label"]}>
                {/* <Icon type="best" size="sm" alt="베스트 게시글" />
                Best */}
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
                  {/* <Icon type="heart" size="sm" /> */}
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
    </div>
  );
}
