import { useState } from "react";
import DropDownList from "components/common/UI/DropDownList";
import SearchForm from "components/common/UI/SearchForm";
import Button from "components/common/UI/Button";
import ReturnButton from "components/common/UI/ReturnButton";
import { getArticles } from "../../core/api";
import { ArticleResponse } from "../../DTO/article";
import useFetch from "../../lib/hooks/useFetch";
import { useSearch } from "lib/hooks/useSearch";
import { usePagination } from "lib/hooks/usePagination";
import useResize from "lib/hooks/useResize";
import Pagination from "components/common/UI/Pagination";
import BasicPostCard from "components/Boards/UI/BasicPostCard";
import NoSearchResult from "components/common/UI/NoSearchResult";

function AllPosts() {
  const [selectedCategory, setSelectedCategory] = useState<string>("최신순");
  const [pageSize, setPageSize] = useState<number>(10);

  useResize(setPageSize, { mobile: 4, tablet: 6, pc: 10 });

  const { data: articlesData } = useFetch<ArticleResponse>(
    getArticles,
    {
      page: 1,
      pageSize: pageSize,
      orderBy: selectedCategory === "최신순" ? "recent" : "like",
      keyword: "",
    },
    { list: [], totalCount: 0 }
  );

  const { list = [], totalCount: fetchedTotalCount = 0 } = articlesData;

  const getProperty = (article: any) => article.content || "";

  const { handleSearch, handleReset, filteredResults } = useSearch(
    articlesData,
    () => {},
    getProperty
  );

  const { currentPage, setCurrentPage, totalCount } = usePagination(
    filteredResults,
    fetchedTotalCount,
    list.length
  );

  return (
    <section className="flex flex-col gap-6 ">
      <div className="flex flex-row justify-between h-[42px] items-center">
        <h1 className="text-gray-900 font-bold text-xl">게시글</h1>
        <Button buttonText="글쓰기" />
      </div>
      <div className="flex flex-row gap-3 max-xl:mt-12">
        <SearchForm
          divClassName="w-full"
          inputClassName="w-full"
          onSearch={handleSearch}
        />
        <div>
          <DropDownList
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
      </div>
      <ul className="flex flex-col gap-6">
        {filteredResults.length === 0 ? (
          <li className="mt-12 flex flex-col items-center justify-center gap-2 ">
            <NoSearchResult category="게시글" />
            <ReturnButton buttonText="전체 게시글 보기" onClick={handleReset} />
          </li>
        ) : (
          filteredResults.map((article) => (
            <BasicPostCard key={article.id} article={article} />
          ))
        )}
      </ul>
      {totalCount > 0 && (
        <Pagination
          currentPage={currentPage}
          totalCount={totalCount}
          pageSize={pageSize}
          onPageChange={setCurrentPage}
        />
      )}
    </section>
  );
}

export default AllPosts;
