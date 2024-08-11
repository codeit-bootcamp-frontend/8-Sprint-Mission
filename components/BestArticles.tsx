import Image from "next/image";
import { useEffect, useState } from "react";
import Article from "@/DTO/article";
import { getArticles } from "@/pages/api/apis";
import formatComparedTime from "@/lib/formatComparedTime";
import styles from "./BestArticles.module.css";
import useAsync from "@/lib/hooks/useAsync";

const WIDTH_PAGE_SIZE_PAIR: {
  [key: string]: number
} = {
  desktop: 3,
  tablet: 2,
  mobile: 1,
  none: 0,
}

type MediaWidthType = "desktop" | "tablet" | "mobile" | "none";

export default function BestArticles({ mediaWidth }: { mediaWidth: MediaWidthType }) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [pageSize, setPageSize] = useState(WIDTH_PAGE_SIZE_PAIR[mediaWidth]);

  const { isPending, error, wrappedAsyncFunction: getArticlesAsync } = useAsync(getArticles)

  const handleLoad = async () => {
    const result = await getArticlesAsync(1, pageSize, "like");
    if(!result) return;
    setArticles(result.list);
  }

  useEffect(() => {
    setPageSize(WIDTH_PAGE_SIZE_PAIR[mediaWidth]);
  }, [mediaWidth]);

  useEffect(() => {
    if(mediaWidth === "none") return;
    handleLoad();
  }, [pageSize]);

  return (
    <section className={styles.bestSection}>
      <p className={styles.bestSectionLabel}>베스트 게시글</p>
      <div className={styles.articlesContainer}>
        {articles.map(article =>
          <div className={styles.articleCard} key={article.id}>
            
            <div className={styles.bestBadge}>
              <div className={styles.badgeImageContainer}>
                <Image fill src="/images/ic_medal.png" alt="뱃지" />
              </div>
              <span>Best</span>
            </div>

            <div className={styles.articleCardContent}>
              <span>{article.title}</span>
              <div className={styles.articleImageContainer}>
                <Image fill src={article.image} alt="이미지" />
              </div>
            </div>

            <div className={styles.articleCardFooter}>
              <div className={styles.articleCardFooterInfo}>
                <span>{article.writer.nickname}</span>
                <div className={styles.likeyContainer}>
                  <div className={styles.heartContainer}>
                    <Image fill src="/images/ic_heart.png" alt="하트" />
                  </div>
                  <span>{(article.likeCount > 9999) ? "9999+" : article.likeCount}</span>
                </div>
              </div>
              <span className={styles.bestArticleDate}>
                {formatComparedTime(article.createdAt)}
              </span>
            </div>

          </div>
        )}
      </div>
    </section>
  )
}