import { useState } from "react";
import useFetch from "lib/hooks/useFetch";
import { getArticles } from "core/api";
import { ArticleResponse } from "DTO/article";
import BestPostCard from "components/Boards/UI/BestPostCard";
import useResize from "lib/hooks/useResize";

function Bestarticles() {
  const [pageSize, setPageSize] = useState<number>(3);
  const { data: articlesData } = useFetch<ArticleResponse>(
    getArticles,
    {
      page: 1,
      pageSize,
      orderBy: "like",
    },
    { list: [], totalCount: 0 }
  );

  useResize(setPageSize, { mobile: 1, tablet: 2, pc: 3 });

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
