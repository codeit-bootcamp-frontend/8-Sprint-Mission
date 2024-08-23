import { useEffect, useState } from "react";
import styles from "@/components/Boards/BestArticleSection.module.css";
import { useRouter } from "next/router";
import axios from "@/lib/axios";

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

const getPageSize = (width: number): number => {
  if (width < 768) {
    return 1;
  } else if (width < 1280) {
    return 2; 
  } else {
    return 3; 
};

type ArticleListResponse = {
  totalCount: number;
  list: Article[];
};

export default function BestArticleSection() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [pageSize, setPageSize] = useState<number | null>(null);
  const router = useRouter();
  const { id } = router.query;

  async function getProduct(articleId: number) {
    const res = await axios.get(`articles/${articleId}`);
    const nextProducts = res.data.list;
    setArticles(nextProducts);

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

        const fetchBestArticles = async (size: number) => {
          try {
            const response = await fetch(
              `https://panda-market-api.vercel.app/articles?orderBy=like&pageSize=${size}`
            );
            const data: ArticleListResponse = await response.json();
            setArticles(data.list);
          } catch (error) {
            console.error("Failed to fetch best articles:", error);
          }
        };

        fetchBestArticles(newPageSize);
      }
    }, [viewportWidth, pageSize]);

    return (
      <div>
        <div className={styles.bestArticleHeader}>
          <span className={styles.bestArticleTitle}>베스트 게시글</span>
        </div>
        <div> {id}</div>
      </div>
    );
  }
}
