import Image from "next/image";
import { Article, ArticlesResponse, GetArticles } from "@/types/types";
import { useEffect, useState } from "react";
import medalIcon from "@/public/images/icons/ic_medal.svg";
import heartIcon from "@/public/images/icons/ic_heart.svg";
import styles from "./BestArticles.module.css";
import Link from "next/link";
import { getArticles } from "@/lib/articleApi";

const BestArticles = () => {
  const MAX_COUNT = 9999;
  const [articles, setArticles] = useState<Article[]>([]);
  const fetchBestArticles = async ({
    page,
    pageSize,
    orderBy,
  }: GetArticles) => {
    const result = await getArticles({ page, pageSize, orderBy });
    setArticles(result.list);
  };
  useEffect(() => {
    fetchBestArticles({ page: 1, pageSize: 3, orderBy: "like" });
  }, []);
  const dateFormat = (date: Date) => {
    const newDate = new Date(date);
    const formatDate = `${newDate.getFullYear()}.${String(
      newDate.getMonth() + 1
    ).padStart(2, "0")}.${String(newDate.getDate()).padStart(2, "0")}`;
    return formatDate;
  };

  return (
    <>
      <h1 className={styles.articleTitle}>베스트 게시글</h1>
      <div className={styles.articleSection}>
        {articles.map((article) => {
          return (
            <Link href={`/board/${article.id}`} key={article.id}>
              <div className={styles.articleCard}>
                <div className={styles.bestMark}>
                  <Image src={medalIcon} alt="medalIcon" />
                  Best
                </div>
                <div className={styles.articleContent}>
                  <p className={styles.articleTitle}>{article.title}</p>
                  <div className={styles.articleThumbnail}>
                    <div className={styles.imageWrapper}>
                      <Image
                        fill
                        src={article.image}
                        alt={`${article.id}번 게시글 이미지`}
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.articleInfo}>
                  <div className={styles.articleInfoContent}>
                    <span>{article.writer.nickname}</span>
                    <div className={styles.articleLike}>
                      <Image src={heartIcon} alt="heart-icon" />
                      {article.likeCount > MAX_COUNT
                        ? MAX_COUNT + "+"
                        : article.likeCount}
                    </div>
                  </div>
                  <div className={styles.articleTimestamp}>
                    {dateFormat(article.createdAt)}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default BestArticles;
