import { getArticleList } from "@/apis/article";
import type { Article, ArticleQuery, ArticleResponse } from "@/models/article";
import { useEffect, useState } from "react";

const DEFAULT_QUERY_PARAMS: ArticleQuery = {
  page: 1,
  pageSize: 5,
  orderBy: "recent",
  keyword: null,
};

const useArticles = () => {
  const [queryParams, setQueryParams] = useState(DEFAULT_QUERY_PARAMS);
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loadArticles = async () => {
    console.log("패치");
    setIsLoading(true);
    try {
      const nextArticles: ArticleResponse = await getArticleList({
        ...queryParams,
      });
      setArticles((prev: Article[]): Article[] => [...nextArticles.list]);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadArticles();
  }, [queryParams.orderBy, queryParams.page, queryParams.pageSize]);

  return { isLoading, loadArticles, articles, setQueryParams };
};

export default useArticles;
