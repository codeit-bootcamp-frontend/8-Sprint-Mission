import styled from "styled-components";
import BestIconImage from "../../../public/images/i-best.png";
import LikeImage from "../../../public/images/i-like.png";
import Link from "next/link";
import { ArticlesList } from "@/types/articleType";

type BestBoardCardProp = {
  bestArticle: ArticlesList;
};

export default function BestBoardCard({ bestArticle }: BestBoardCardProp) {
  return (
    <BestCardWrap>
      <BestIcon>
        <img src={BestIconImage.src} alt="베스트 아이콘 이미지" />
        <span>Best</span>
      </BestIcon>
      <BestCardContent>
        <BestCardTitle>{bestArticle.title}</BestCardTitle>
        <BestCardImage>
          <img src={bestArticle.image} alt="게시글 이미지" />
        </BestCardImage>
      </BestCardContent>
      <BestCardInfo>
        <CardInfoLeft>
          {bestArticle.writer.nickname}
          <span>
            <img src={LikeImage.src} alt="하트 이미지" />
            {bestArticle.likeCount}
          </span>
        </CardInfoLeft>
        <CardInfoDate>2024.04.18</CardInfoDate>
      </BestCardInfo>
    </BestCardWrap>
  );
}

const BestCardWrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 385px;
  height: 170px;
  padding: 46px 24px 9px 24px;
  border-radius: 8px;
  background-color: #f9fafb;
`;

const BestIcon = styled.div`
  position: absolute;
  top: 0;
  left: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 100px;
  height: 30px;
  border-radius: 0 0 16px 16px;
  background-color: var(--blue-color);

  span {
    display: inline-block;
    font-size: 1.6rem;
    font-weight: 600;
    padding-top: 3px;
    color: #ffffff;
  }
`;

const BestCardContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 18px;
`;

const BestCardTitle = styled.h3`
  display: inline-block;
  width: 80%;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.5;
`;

const BestCardImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid var(--gray200-color);
  background-color: #ffffff;

  img {
    width: 100%;
  }
`;

const BestCardInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CardInfoLeft = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--gray600-color);

  span {
    display: flex;
    align-items: center;
    margin: 0 8px;
    color: var(--gray500-color);

    img {
      margin-right: 5px;
    }
  }
`;

const CardInfoDate = styled.span`
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--gray400-color);
`;
