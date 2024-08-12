import ArticleList from '@/components/ArticleList';
import BestArticleList from '@/components/BestArticleList';
import Button from '@/components/Button';
import Header from '@/components/Header';
import SearchForm from '@/components/SearchForm';
import axios from '@/lib/axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function Boards() {
  const [articles, setArticles] = useState([]);
  const [bestArticles, setBestArticles] = useState([]);

  async function getArticles() {
    const response = await axios.get('/articles');
    const articlesData = response.data.list;
    setArticles(articlesData);
  }

  async function getBestArticles() {
    const response = await axios.get('/articles', {
      params: { pageSize: 3, orderBy: 'like' },
    });
    const BestArticleData = response.data.list;
    setBestArticles(BestArticleData);
  }

  useEffect(() => {
    getArticles();
    getBestArticles();
  }, []);

  return (
    <>
      <Header />
      <h2>베스트 게시글</h2>
      <BestArticleList bestArticles={bestArticles} />
      <PostsWrapper>
        <PostsTopBar>
          <h2>게시글</h2>
          <Button />
        </PostsTopBar>
        <SearchForm />
        <ArticleList articles={articles} />
      </PostsWrapper>
    </>
  );
}

const PostsWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const PostsTopBar = styled.div`
  width: 100%;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & h2 {
    font-weight: 700;
    font-size: 20px;
    color: var(--gray800);
  }
`;
