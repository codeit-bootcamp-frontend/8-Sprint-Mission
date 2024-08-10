import { getArticles } from "@/api/api";
import AllBoard from "@/components/boards/AllBoard";
import BestBoard from "@/components/boards/BestBoard";
import { ArticlesList, ArticlesQuery } from "@/types/articleType";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function BoardPage() {
  const [articles, setArticles] = useState<ArticlesList[]>([]);
  const [articleQuery, setArticleQuery] = useState<ArticlesQuery>({
    page: 1,
    pageSize: 10,
    orderBy: "recent",
  });
  const [bestArticles, setBestArticles] = useState<ArticlesList[]>([]);
  const [bestArticleQuery, setBestArticleQuery] = useState<ArticlesQuery>({
    page: 1,
    pageSize: 3,
    orderBy: "like",
  });

  // Best 게시글
  useEffect(() => {
    const handleLoad = async (option: ArticlesQuery) => {
      try {
        const { list } = await getArticles(option);
        setBestArticles(list);
      } catch (error) {
        console.error("Error Messages: " + error);
      }
    };

    handleLoad(bestArticleQuery);
  }, []);

  // 전체 게시글
  useEffect(() => {
    const handleLoad = async (option: ArticlesQuery) => {
      try {
        const { list } = await getArticles(option);
        setArticles(list);
      } catch (error) {
        console.error("Error Messages: " + error);
      }
    };

    handleLoad(articleQuery);
  }, [articleQuery]);

  return (
    <BoardWrap>
      <BestBoard bestArticles={bestArticles} />
      <AllBoard articles={articles} setArticleQuery={setArticleQuery} />
    </BoardWrap>
  );
}

const BoardWrap = styled.div`
  margin: 24px 0 40px;
`;
