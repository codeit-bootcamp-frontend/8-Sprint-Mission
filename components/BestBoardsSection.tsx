"use client";

import axios from "@/app/lib/axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Bedge from "@/assets/images/icons/ic_badge.svg";
import Image from "next/image";
import Heart from "@/assets/images/icons/ic_heart.svg";

interface Board {
  id: number;
  title: string;
  image: string;
  writer: {
    nickname: string;
  };
  likeCount: number;
  createdAt: string;
}

export default function BestBoardsSection() {
  const [boardList, setBoardList] = useState<Board[]>([]);

  async function getBoards() {
    try {
      const res = await axios.get("/articles?orderBy=like");
      const nextBoards = res.data.list;
      setBoardList(nextBoards);
    } catch (error) {
      console.error("베스트 게시글을 불러오는데 실패했습니다:", error);
    }
  }

  useEffect(() => {
    getBoards();
  }, []);

  // 날짜를 원하는 스타일로 변경하는 함수
  // (공부용) Intl.DateTimeFormatOptions는 JavaScript의 국제화 API인 Intl에서 사용하는 인터페이스로,
  // 날짜와 시간을 포맷할 때 사용할 수 있는 옵션들을 정의
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };
    return new Date(dateString)
      .toLocaleDateString("ko-KR", options)
      .replace(/\./g, ".")
      .replace(/ /g, "")
      .slice(0, -1);
  };

  return (
    <BestBoardsContainer>
      <BestBoardsContext>베스트 게시글</BestBoardsContext>
      <BestBoardsProductContainer>
        {boardList.slice(0, 3).map((board) => (
          <BestBoardsCard key={board.id}>
            <Image src={Bedge} alt="Best 뱃지" width="102" />
            <CardContextContainer>
              <CardTitle>{board.title}</CardTitle>
              <CardImage
                src={board.image}
                alt={board.title}
                width="72"
                height="72"
              />
            </CardContextContainer>
            <CardFooterContainer>
              <CardUserContainer>
                <CardUserFont>{board.writer.nickname}</CardUserFont>
                <CardLikeCountFont>
                  <Image src={Heart} alt="좋아요" width="16" />
                  {board.likeCount > 9999 ? "9999+" : board.likeCount}
                </CardLikeCountFont>
              </CardUserContainer>
              <CardCreatedAtFont>
                {formatDate(board.createdAt)}
              </CardCreatedAtFont>
            </CardFooterContainer>
          </BestBoardsCard>
        ))}
      </BestBoardsProductContainer>
    </BestBoardsContainer>
  );
}

// styled-components
const BestBoardsContainer = styled.div`
  width: 1200px;
  margin: 24px auto 40px;
`;

const BestBoardsContext = styled.h2`
  font-weight: 700;
  font-size: 20px;
  color: #111827;
  margin-bottom: 24px;
`;

const BestBoardsProductContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
`;

const BestBoardsCard = styled.div`
  width: 384px;
  height: 169px;
  border-radius: 8px;
  padding: 0 24px;
  background-color: #f9fafb;
`;

const CardContextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

const CardTitle = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  color: #1f2937;
`;

const CardImage = styled(Image)`
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  background-color: #ffffff;
`;

const CardFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CardUserContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const CardText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
`;

const CardUserFont = styled(CardText)`
  color: #4b5563;
`;

const CardLikeCountFont = styled(CardText)`
  color: #6b7280;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const CardCreatedAtFont = styled(CardText)`
  color: #9ca3af;
`;
