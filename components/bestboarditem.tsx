import Badge from "@/images/badge.png";
import Image from "next/image";
import styled from "styled-components";
import favorite from "@/images/favorite.png";

export default function BestBoardItem() {
  return (
    <Wrapper>
      <Image src={Badge} alt="badge" />
      <BoardWrapper>
        <BoardTitle>제목</BoardTitle>
        <WriterWrapper>
          총명한 판다 어쩌고 저쩌고
          <Image src={favorite} alt="favorite" />
        </WriterWrapper>
      </BoardWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 384px;
  height: 169px;
  border-radius: 8px;
  padding: 0px 24px;
  display: flex;
  flex-direction: column;
  background-color: #f9fafb;
  gap: 24px;
`;

const BoardTitle = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const BoardWrapper = styled.div`
  height: 55%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const WriterWrapper = styled.div`
  display: flex;
  align-items: center;
`;
