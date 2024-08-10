import PostListHeader from "./PostListHeader";
import getArticles, { Article, orderOption } from "@/apis/getArticles";
import { useState, useEffect, useCallback } from "react";
import BasicPostCard from "./BasicPostCard";

export default function PostList() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [orderOption, setOrderOption] = useState<orderOption>("recent");

  const handleAllArticleLoad = useCallback(async () => {
    const { list } = await getArticles({ pageSize: 10, orderBy: orderOption });
    setArticles(list);
  }, [orderOption]);

  useEffect(() => {
    handleAllArticleLoad();
  }, [handleAllArticleLoad]);

  return (
    <section>
      <PostListHeader currentOrderOption={orderOption} onChangeOrder={setOrderOption} />
      <div className="flex flex-col gap-[24px]">
        {articles.map((article) => (
          <BasicPostCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}
