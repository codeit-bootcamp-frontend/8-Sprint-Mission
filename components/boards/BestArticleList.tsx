import { useEffect, useState } from "react";

import { getArticleList } from "@/apis/article";
import usePageSize from "@/hooks/usePageSize";

import { ArticleQuery, Article, ArticleResponse } from "@/models/article";
import BestArticle from "./BestArticle";
import { INITIAL_PAGE_SIZE } from "@/lib/constants";

export default function BestArticleList() {
  const [bestArticles, setBestArticles] = useState<Article[]>([]);
  const { sizeName } = usePageSize();
  const loadBestArticles = async () => {
    const nextArticles: ArticleResponse = await getArticleList({
      page: 1,
      pageSize: INITIAL_PAGE_SIZE[sizeName],
      orderBy: "like",
      keyword: null,
    });
    setBestArticles(nextArticles.list);
  };

  useEffect(() => {
    if (INITIAL_PAGE_SIZE[sizeName] <= bestArticles.length) {
      return;
    }
    loadBestArticles();
  }, [sizeName]);
  return (
    <div className="flex flex-col gap-4 md:gap6">
      <span className="font-bold text-lg">베스트 게시글</span>
      <BestArticle articles={bestArticles} />
    </div>
  );
}
