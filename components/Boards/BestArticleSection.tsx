import { useEffect, useState } from "react";
import styles from "@/components/Boards/BestArticleSection.module.css";

export default function BestArticleSection() {
  //   const [articles, setArticles] = useState();

  //   //   const viewportWidth = useViewport();

  //   useEffect(() => {
  //     // if (viewportWidth === 0) return;

  //     const fetchBestArticles = async (size: number) => {
  //       try {
  //         const response = await fetch(
  //           `https://panda-market-api.vercel.app/articles?orderBy=like&pageSize=${size}`
  //         );
  //         const data: ArticleListResponse = await response.json();
  //         setArticles(data.list);
  //       } catch (error) {
  //         console.error("Failed to fetch best articles:", error);
  //       }
  //       fetchBestArticles(newPageSize);
  //     };
  //   }, []);

  return (
    <div>
      <div className={styles.bestArticleHeader}>
        <span className={styles.bestArticleTitle}>베스트 게시글</span>
      </div>

      {/* <div className={bestArticleMainContainer}>
        {articles.map((article) => (
          <div className={bestArticleMain}
            key={`best-article-${article.id}`}
            article={article}
          />
        ))}
      </div> */}
    </div>
  );
}
