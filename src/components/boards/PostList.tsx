import PostListHeader from "./PostListHeader";
import getArticles, { Article, orderOption } from "@/apis/getArticles";
import { useState, useEffect, useCallback } from "react";
import BasicPostCard from "./BasicPostCard";

export default function PostList() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [orderOption, setOrderOption] = useState<orderOption>("recent");
  const [currentKeyword, setCurrentKeyword] = useState("");

  const handleAllArticleLoad = useCallback(async () => {
    const { list } = await getArticles({
      pageSize: 10,
      orderBy: orderOption,
      keyword: currentKeyword,
    });
    setArticles(list);
  }, [orderOption, currentKeyword]);

  useEffect(() => {
    handleAllArticleLoad();
  }, [handleAllArticleLoad]);

  return (
    <section className="flex flex-col gap-[16px] md:gap-[24px]">
      <PostListHeader
        currentOrderOption={orderOption}
        onOrderChange={setOrderOption}
        onKeywordChange={setCurrentKeyword}
      />
      <div className="flex flex-col gap-[24px]">
        {articles.map((article) => (
          <BasicPostCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}
