import BestBoard from "@/components/board/BestBoard";
import styled from "styled-components";

export default function BoardPage() {
  return (
    <BoardWrap>
      <BestBoard />
    </BoardWrap>
  );
}

const BoardWrap = styled.div`
  margin-top: 24px;
`;
