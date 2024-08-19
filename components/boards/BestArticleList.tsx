import { useCallback, useEffect, useState } from "react";

import { getArticleList } from "@/apis/article";
import usePageSize from "@/hooks/usePageSize";

import { ArticleQuery, Article, ArticleResponse } from "@/types/article";
import BestArticle from "./BestArticle";
import { INITIAL_PAGE_SIZE } from "@/lib/constants";

export default function BestArticleList() {
  const [bestArticles, setBestArticles] = useState<Article[]>([]);
  const { sizeName } = usePageSize();
  const loadBestArticles = useCallback(async () => {
    const nextArticles: ArticleResponse = await getArticleList({
      page: 1,
      pageSize: 3,
      orderBy: "like",
    });
    setBestArticles(nextArticles.list);
  }, []);
  useEffect(() => {
    loadBestArticles();
  }, [loadBestArticles]);
  return (
    <div className="flex flex-col gap-4 md:gap6">
      <span className="font-bold text-lg">베스트 게시글</span>
      <BestArticle
        articles={bestArticles.slice(0, INITIAL_PAGE_SIZE[sizeName])}
      />
    </div>
  );
}
