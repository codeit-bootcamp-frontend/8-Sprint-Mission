import styled from "styled-components";
import favorite from "@/images/favorite.png";
import Image from "next/image";

export default function BoardItem() {
  return (
    <Wrapper>
      <BoardTitle>제목</BoardTitle>

      <Image src={favorite} alt="favorite" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 1200px;
  height: 138px;
  display: flex;
  flex-direction: column;
  background-color: #fcfcfc;
  gap: 24px;
  border-bottom: solid 1px #e5e7eb;
`;

const BoardTitle = styled.span`
  font-size: 20px;
  font-weight: 600;
`;
