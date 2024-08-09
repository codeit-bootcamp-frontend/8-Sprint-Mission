"use client";

import axios from "@/app/lib/axios";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import ProfileImage from "@/assets/images/icons/ic_profileimage.svg";
import Heart from "@/assets/images/icons/ic_heart.svg";
import Search from "@/assets/images/icons/ic_search.svg";
import DropdownMenu from "@/components/DropdownMenu";

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

export default function BoardsSection() {
  const [boardList, setBoardList] = useState<Board[]>([]);
  const [value, setValue] = useState<string>("");
  const [orderBy, setOrderBy] = useState<string>("recent");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await getBoards(value);
  }

  // (공부용) encodeURIComponent를 활용하여 URI의 구성요소를 인코딩
  // → URI의 특정 문자를 UTF-8로 코딩하여 이스케이프 문자로 표현
  async function getBoards(keyword?: string) {
    try {
      const res = await axios.get(
        `articles?orderBy=${orderBy}${
          keyword ? `&keyword=${encodeURIComponent(keyword)}` : ""
        }`
      );
      const nextBoards = res.data.list;
      setBoardList(nextBoards);
    } catch (error) {
      console.error("베스트 게시글을 불러오는데 실패했습니다:", error);
    }
  }

  const handleSortSelection = (sortOption: string) => {
    setOrderBy(sortOption);
  };

  useEffect(() => {
    getBoards();
  }, [orderBy]);

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
    <BoardsContainer>
      <BoardsContextContainer>
        <BoardsContext>게시글</BoardsContext>
        <BoardsWriteButton>글쓰기</BoardsWriteButton>
      </BoardsContextContainer>
      <FormContainer>
        <SearchForm onSubmit={handleSubmit}>
          <SearchInputContainer>
            <Image src={Search} alt="검색" width="24" />
            <StyledInput
              name="keyword"
              value={value}
              placeholder="검색할 상품을 입력해주세요"
              onChange={handleChange}
            />
          </SearchInputContainer>
        </SearchForm>
        <DropdownMenu
          onSortSelection={handleSortSelection}
          selectedSort={orderBy}
        />
      </FormContainer>

      <BoardsProductContainer>
        {boardList.slice(0, 4).map((board) => (
          <BoardsCard key={board.id}>
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
                <Image src={ProfileImage} alt="작성자 프로필사진" width="24" />
                <CardUserFont>{board.writer.nickname}</CardUserFont>
                <CardCreatedAtFont>
                  {formatDate(board.createdAt)}
                </CardCreatedAtFont>
              </CardUserContainer>
              <CardLikeCountFont>
                <Image src={Heart} alt="좋아요" width="24" />
                {board.likeCount > 9999 ? "9999+" : board.likeCount}
              </CardLikeCountFont>
            </CardFooterContainer>
          </BoardsCard>
        ))}
      </BoardsProductContainer>
    </BoardsContainer>
  );
}

// styled-components
const BoardsContainer = styled.div`
  width: 1200px;
  margin: 0 auto 70px;
`;

const BoardsContextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const BoardsContext = styled.h2`
  font-weight: 700;
  font-size: 20px;
  color: #1f2937;
`;

const BoardsWriteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  height: 42px;
  border-radius: 8px;
  padding: 12px 23px;
  background-color: #3692ff;
  font-weight: 600;
  font-size: 16px;
  font-family: "Pretendard", sans-serif;
  color: #ffffff;
  cursor: pointer;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SearchForm = styled.form`
  width: 1054px;
  height: 42px;
  border-radius: 12px;
  padding: 9px 20px 9px 16px;
  background-color: #f3f3f6;
`;

const SearchInputContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 100%;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #9ca3af;
`;

const BoardsProductContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
  flex-direction: column;
  margin-top: 24px;
`;

const BoardsCard = styled.div`
  width: 100%;
  padding-bottom: 24px;
  background-color: #fcfcfc;
  border-bottom: 1px solid #e5e7eb;
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
  border: 1px solid #f3f4f6;
  border-radius: 8px;
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
  gap: 8px;
  font-size: 16px;
`;

const CardCreatedAtFont = styled(CardText)`
  color: #9ca3af;
`;
