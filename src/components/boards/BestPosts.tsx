import { Article, getArticles } from "@/axios/articles";
import usePageSize from "@/hooks/usePageSize";
import { useState, useEffect, useCallback } from "react";
import BestPostCard from "./BestPostCard";

export default function BestPosts() {
  const [bestArticles, setBestArticles] = useState<Article[]>([]);
  const pageSize = usePageSize(1, 2, 3);

  const handleBestArticleLoad = useCallback(async () => {
    const { list } = await getArticles({ pageSize, orderBy: "like" });
    setBestArticles(list);
  }, [pageSize]);

  useEffect(() => {
    handleBestArticleLoad();
  }, [handleBestArticleLoad]);

  return (
    <section className="w-full">
      <h2 className="text-gray-900 font-bold text-[18px] md:text-[20px] mb-[16px] md:mb-[24px]">
        베스트 게시글
      </h2>
      <div className="flex h-[198px] md:gap-[16px] xl:h-[169px] xl:gap-[24px]">
        {bestArticles.map((article) => (
          <BestPostCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}
