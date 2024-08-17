import styled from "styled-components";
import { ArticlesList } from "@/types/articleType";
import BestBoardCard from "./BestBoardCard";
import Link from "next/link";

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
            <Link
              className="w-full"
              href={`boards/${bestArticle.id}`}
              key={bestArticle.id}
            >
              <BestBoardCard bestArticle={bestArticle} />
            </Link>
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
