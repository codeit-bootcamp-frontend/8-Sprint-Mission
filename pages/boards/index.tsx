import BestPostList from "@/components/BestPostList";
import Nav from "@/components/Nav";
import DropDown from "@/components/DropDown";
import SearchInput from "@/components/SearchInput";
import Button from "@/components/Button";
import PostList from "@/components/PostList";
import styled from "styled-components";
import axios from "@/lib/axios";
import { useState, useEffect } from "react";
import Link from "next/link";

const StyledContainer = styled.main`
  width: 1200px;
  margin: auto;
`;

const StyledTitle = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: var(--gray-900);
  margin-bottom: 24px;
`;

const StyledButton = styled(Button)`
  font-size: 16px;
  font-weight: 700;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--gray-50);
`;

const StyledArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface Article {
  id: number;
  title: string;
  content: string;
  image: string;
  writer: {
    nickname: string;
    id: number;
  };
  createdAt: string;
  updatedAt: string;
  likeCount: number;
}

interface PostListPageProps {
  initialArticles: Article[];
  initialOrderBy: string;
  initialSearchQuery: string;
}

export async function getServerSideProps(context: any) {
  const { orderBy = "recent", keyword = "" } = context.query;

  const query = {
    orderBy,
    page: 1,
    pageSize: 30,
    keyword,
  };
  const res = await axios.get(
    `/articles?orderBy=${query.orderBy}&keyword=${query.keyword}`
  );
  const initialArticles = res.data.list;
  return {
    props: {
      initialArticles,
      initialOrderBy: orderBy,
      initialSearchQuery: keyword,
    },
  };
}

export default function PostListPage({
  initialArticles,
  initialOrderBy,
  initialSearchQuery,
}: PostListPageProps) {
  const [searchQuery, setSearchQuery] = useState<string>(initialSearchQuery);
  const [articles, setArticles] = useState<Article[]>(initialArticles);
  const [orderBy, setOrderBy] = useState<string>(initialOrderBy);

  async function getProducts() {
    const query = {
      orderBy,
      page: 1,
      pageSize: 30,
      keyword: searchQuery,
    };
    const res = await axios.get(
      `/articles?orderBy=${query.orderBy}&page=${query.page}&pageSize=${query.pageSize}&keyword=${query.keyword}`
    );
    const nextArticles = res.data.list;
    setArticles(nextArticles);
  }

  useEffect(() => {
    getProducts();
  }, [orderBy, searchQuery]);

  return (
    <>
      <Nav />
      <StyledContainer>
        <BestPostList />
        <StyledArea>
          <StyledTitle>게시글</StyledTitle>
          <StyledButton>
            <StyledLink href={"/addboard"}>글쓰기</StyledLink>
          </StyledButton>
        </StyledArea>
        <StyledArea>
          <SearchInput onSearch={setSearchQuery} />
          <DropDown onOrderChange={setOrderBy} />
        </StyledArea>
        <PostList articles={articles} />
      </StyledContainer>
    </>
  );
}
