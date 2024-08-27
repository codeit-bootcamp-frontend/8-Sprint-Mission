import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "@/components/Boards/BestArticleSection.module.css";
import Image from "next/image";
import axios from "@/lib/axios";
import { format } from "date-fns";

type Article = {
  updatedAt: Date;
  createdAt: Date;
  likeCount: number;
  writer: { nickname: string; id: number };
  image: string;
  content: string;
  title: string;
  id: number;
};

type ArticleListResponse = {
  totalCount: number;
  list: Article[];
};

const getPageSize = (width: number): number => {
  if (width < 768) {
    return 1;
  } else if (width < 1280) {
    return 2;
  } else {
    return 3;
  }
};

export default function BestArticleSection() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [pageSize, setPageSize] = useState<number | null>(null);
  const router = useRouter();

  const useViewport = () => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth);
      handleWindowResize();
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return width;
  };

  const viewportWidth = useViewport();

  useEffect(() => {
    if (viewportWidth === 0) return;

    const newPageSize = getPageSize(viewportWidth);

    if (newPageSize !== pageSize) {
      setPageSize(newPageSize);

      const axiosBestArticles = async (size: number) => {
        try {
          const response = await axios.get<ArticleListResponse>(
            `https://panda-market-api.vercel.app/articles?orderBy=like&pageSize=${size}`
          );
          setArticles(response.data.list);
        } catch (error) {
          console.error("Failed to fetch best articles:", error);
        }
      };

      axiosBestArticles(newPageSize);
    }
  }, [viewportWidth, pageSize]);

  return (
    <div>
      <div className={styles.bestArticleHeader}>
        <span className={styles.bestArticleTitle}>베스트 게시글</span>
      </div>

      <div className={styles.allContainer}>
        {articles.map((article) => (
          <div key={article.id} className={styles.bestArticleCardContainer}>
            <Image
              unoptimized={true}
              src="/assets/images/bestBadge.png"
              width={102}
              height={30}
              alt="베스트 뱃지"
            />

            <div className={styles.bestArticleCard}>
              <span className={styles.cardTitle}>{article.title}</span>
              <Image
                className={styles.bestArticleImage}
                src={article.image}
                width={72}
                height={72}
                alt={`${article.title} 이미지`}
              />
            </div>
            <div className={styles.bestArticleFooter}>
              <div className={styles.bestArticleInform}>
                <div>{article.writer.nickname}</div>
                <div>{article.likeCount}</div>
              </div>
              <div>{format(new Date(article.createdAt), "yyyy. MM. dd")}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
