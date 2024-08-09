import { useState, useEffect } from "react";
import useFetch from "lib/hooks/useFetch";
import { getArticles } from "core/api";
import { ArticleResponse } from "DTO/article";
import countPageItems from "lib/utils/countPageItems";
import BestPostCard from "components/Boards/UI/BestPostCard";

function Bestarticles() {
  const [pageSize, setPageSize] = useState<number>(countPageItems(1, 2, 3));
  const { data: articlesData } = useFetch<ArticleResponse>(
    getArticles,
    {
      page: 1,
      pageSize,
      orderBy: "like",
    },
    { list: [], totalCount: 0 }
  );

  const handlePageSize = () => {
    const newPageSize = countPageItems(1, 2, 3);
    setPageSize(newPageSize);
  };

  // get pageSize on window resize
  useEffect(() => {
    window.addEventListener("resize", handlePageSize);

    return () => {
      window.removeEventListener("resize", handlePageSize);
    };
  }, [pageSize]);

  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-gray-900 font-bold text-xl">베스트 게시물</h1>
      <ul className="flex flex-row gap-6 max-xl:w-full max-xl:gap-4 max-xl:h-[246px]">
        {articlesData.list.length > 0 ? (
          articlesData.list.map((article) => (
            <BestPostCard key={article.id} article={article} />
          ))
        ) : (
          <li>게시물이 없습니다.</li>
        )}
      </ul>
    </section>
  );
}

export default Bestarticles;
