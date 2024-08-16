import styled from "styled-components";
import { ArticlesList } from "@/types/articleType";
import BestBoardCard from "./BestBoardCard";

type BestBoard = {
  bestArticles: ArticlesList[];
};

export default function BestBoard({ bestArticles }: BestBoard) {
  return (
    <BestBoardWrap>
      <BoardTitle>베스트 게시글</BoardTitle>
      <BestBoardCardList>
        {bestArticles.map((bestArticle) => {
          return (
            <BestBoardCard key={bestArticle.id} bestArticle={bestArticle} />
          );
        })}
      </BestBoardCardList>
    </BestBoardWrap>
  );
}

const BestBoardWrap = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;
  margin-bottom: 40px;
`;

const BoardTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 24px;
`;

const BestBoardCardList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;
