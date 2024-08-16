import BestPostList from "@/components/BestPostList";
import Nav from "@/components/Nav";
import DropDown from "@/components/DropDown";
import SearchInput from "@/components/SearchInput";
import Button from "@/components/Button";
import PostList from "@/components/PostList";
import styled from "styled-components";
import axios from "@/lib/axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

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

const StyledArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

type Writer = {
  nickname: string;
  id: number;
};

type Article = {
  updatedAt: string;
  createdAt: string;
  likeCount: number;
  writer: Writer;
  image: string;
  title: string;
  id: number;
};

type Props = {
  articles: Article[];
};

export default function PostListPage() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [articles, setArticles] = useState([]);
  const [orderBy, setOrderBy] = useState<string>("recent");

  async function getProducts() {
    const query = {
      orderBy,
      page: 1,
      pageSize: 10,
      keyword: searchQuery,
    };
    const res = await axios.get(
      `/articles?orderBy=${query.orderBy}&keyword=${query.keyword}`
    );
    const nextArticles = res.data.list;
    setArticles(nextArticles);
  }

  useEffect(() => {
    getProducts();
    console.log("Fetching products with:", { searchQuery, orderBy });
  }, [orderBy, searchQuery]);

  return (
    <>
      <Nav />
      <StyledContainer>
        <BestPostList />
        <StyledArea>
          <StyledTitle>게시글</StyledTitle>
          <StyledButton>글쓰기</StyledButton>
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
