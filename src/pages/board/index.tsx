import AllBoard from "@/components/board/AllBoard";
import BestBoard from "@/components/board/BestBoard";
import styled from "styled-components";

export default function BoardPage() {
  return (
    <BoardWrap>
      <BestBoard />
      <AllBoard />
    </BoardWrap>
  );
}

const BoardWrap = styled.div`
  margin: 24px 0 40px;
`;
