import Image from "next/image";
import DateTrimmer from "@/utils/TimeTrimmer";
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "@/lib/axios";
import Link from "next/link";

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const StyledTitle = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: var(--gray-900);
  margin-bottom: 24px;
`;

const StyledPostArea = styled.div`
  width: 384px;
  padding: 0px 24px;
  border-radius: 8px;
  background-color: var(--gray-50);
`;

const StyledPostTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: var(--gray-800);
`;

const StyledTopArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledImageWrapper = styled.img`
  width: 72px;
  height: 72px;
  border: 1px solid var(--gray-200);
  border-radius: 6px;
  position: relative;
`;

const StyledBottomArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledBottomLeftArea = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  align-items: center;
`;

const StyledNickname = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: var(--gray-600);
`;

const StyledLikeCount = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: var(--gray-500);
`;

const StyledDate = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: var(--gray-400);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
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

function BestPostList() {
  const [articles, setArticles] = useState<Article[]>([]);

  async function getProducts() {
    const query = {
      orderBy: "like",
      page: 1,
      pageSize: 3,
    };
    const res = await axios.get(
      `/articles?orderBy=${query.orderBy}&page=${query.page}&pageSize=${query.pageSize}`
    );
    const nextArticles = res.data.list;
    setArticles(nextArticles);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <StyledTitle>베스트 게시글</StyledTitle>
      <Container>
        {articles.map((article) => (
          <StyledLink href={`/boards/${article.id}`} key={article.id}>
            <StyledPostArea>
              <Image
                unoptimized={true}
                width={102}
                height={30}
                src="/image/best_badge.png"
                alt="베스트 게시글 뱃지"
              />
              <StyledTopArea>
                <StyledPostTitle>{article.title}</StyledPostTitle>
                <StyledImageWrapper
                  src={article.image}
                  alt="게시글 첨부 이미지"
                />
              </StyledTopArea>
              <StyledBottomArea>
                <StyledBottomLeftArea>
                  <StyledNickname>{article.writer.nickname}</StyledNickname>
                  <Image
                    unoptimized={true}
                    width={15}
                    height={13}
                    src="/image/heart_inactive.png"
                    alt="좋아요 아이콘"
                  />
                  <StyledLikeCount>{article.likeCount}</StyledLikeCount>
                </StyledBottomLeftArea>
                <StyledDate>{DateTrimmer(article.createdAt)}</StyledDate>
              </StyledBottomArea>
            </StyledPostArea>
          </StyledLink>
        ))}
      </Container>
    </>
  );
}

export default BestPostList;
