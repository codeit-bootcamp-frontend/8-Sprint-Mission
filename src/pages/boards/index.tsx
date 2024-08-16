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
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Best 게시글
  useEffect(() => {
    const handleLoad = async (option: ArticlesQuery) => {
      setLoading(true);
      try {
        const { list } = await getArticles(option);
        setBestArticles(list);
      } catch (err) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    handleLoad(bestArticleQuery);
  }, []);

  // 전체 게시글
  useEffect(() => {
    setLoading(true);
    const handleLoad = async (option: ArticlesQuery) => {
      try {
        const { list } = await getArticles(option);
        setArticles(list);
      } catch (err) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    handleLoad(articleQuery);
  }, [articleQuery]);

  if (loading) {
    return <h1>데이터를 불러오고 있습니다.</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

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
