import { getArticleList } from "@/apis/article";
import type { Article, ArticleQuery, ArticleResponse } from "@/types/article";
import { useEffect, useState } from "react";

const DEFAULT_QUERY_PARAMS: ArticleQuery = {
  page: 1,
  pageSize: 5,
  orderBy: "recent",
  keyword: "",
};
const useArticles = () => {
  const [queryParams, setQueryParams] = useState(DEFAULT_QUERY_PARAMS);
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const loadArticles = async () => {
    setIsLoading(true);
    try {
      const nextArticles: ArticleResponse = await getArticleList({
        ...queryParams,
      });

      setArticles((prev: Article[]): Article[] => [
        ...prev,
        ...nextArticles.list,
      ]);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    loadArticles();
  }, [
    queryParams.orderBy,
    queryParams.page,
    queryParams.pageSize,
    queryParams.keyword,
  ]);

  //무한스크롤, 따로 분리해서 작성하다가 헷갈려서 일단 합쳤습니다.
  const [target, setTarget] = useState<HTMLLIElement | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setQueryParams((prev) => ({ ...prev, page: prev.page + 1 }));
          }
        });
      },
      { threshold: 1.0 }
    );

    if (!target) return;
    observer.observe(target);

    return () => {
      if (observer) {
        observer.unobserve(target);
      }
    };
  }, [target]);

  return {
    isLoading,
    loadArticles,
    articles,
    setQueryParams,
    setTarget,
    setArticles,
  };
};

export default useArticles;
