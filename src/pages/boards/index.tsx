import { getArticles } from "@/api/api";
import AllBoard from "@/components/boards/AllBoard";
import BestBoard from "@/components/boards/BestBoard";
import { ArticlesList, ArticlesQuery } from "@/types/articleType";
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function BoardPage() {
	const [sortOrder, setSortOrder] = useState("recent");
  const [searchKeyword, setSearchKeyword] = useState("");
	console.log(sortOrder, searchKeyword);

	// 전체 게시글
	const {data: articlesData, isLoading: isAllLoading, isError: isAllError} = useQuery({
		queryKey: ['articles', sortOrder, searchKeyword],
		queryFn: () => getArticles({page: 1,pageSize: 10, orderBy: sortOrder, keyword: searchKeyword}),
	})
	const articles = articlesData?.list ?? [];

	// 베스트 게시글
	const {data: bestArticlesData, isLoading: isBestLoading, isError: isBestError} = useQuery({
		queryKey: ['bestArticles'],
		queryFn: () => getArticles({page: 1,pageSize: 3, orderBy: "like"})
	})
	const bestArticles = bestArticlesData?.list ?? [];

  if (isAllLoading || isBestLoading) {
    return (
      <div className="flex justify-center items-center h-lvh">
        <h1>데이터를 불러오고 있습니다.</h1>
      </div>
    );
  }

  if (isAllError || isBestError) {
    return (
      <div className="flex justify-center items-center h-lvh">
        <h1>Error: {isAllError || isBestError}</h1>
      </div>
    );
  }

  return (
    <BoardWrap>
      <BestBoard bestArticles={bestArticles} />
      <AllBoard articles={articles} setSortOrder={setSortOrder} setSearchKeyword={setSearchKeyword} />
    </BoardWrap>
  );
}

const BoardWrap = styled.div`
  margin: 24px 0 40px;
`;
