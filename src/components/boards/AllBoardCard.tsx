import styled from "styled-components";
import LikeImage from "../../../public/images/i-like.png";
import ProfileImage from "../../../public/images/i-profile.png";
import { ArticlesList } from "@/types/articleType";

type AllBoardCardProp = {
  article: ArticlesList;
};

export default function AllBoardCard({ article }: AllBoardCardProp) {
  const date = new Date(article.createdAt);
  return (
    <AllCardWrap>
      <AllCardTop>
        <AllCardTitle>{article.title}</AllCardTitle>
        <AllCardImage>
          <img src={article.image} alt="게시글 이미지" />
        </AllCardImage>
      </AllCardTop>
      <AllCardBottom>
        <AllCardInfoLeft>
          <img src={ProfileImage.src} alt="프로필 이미지" />
          <p>{article.writer.nickname}</p>
          <span>{date.toLocaleDateString()}</span>
        </AllCardInfoLeft>
        <AllCardLike>
          <img src={LikeImage.src} alt="하트 이미지" />
          {article.likeCount}
        </AllCardLike>
      </AllCardBottom>
    </AllCardWrap>
  );
}

const AllCardWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 140px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--gray200-color);
  background-color: #fcfcfc;
`;

const AllCardTop = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 16px;
`;

const AllCardTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  padding-top: 5px;
`;

const AllCardImage = styled.div`
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

const AllCardBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AllCardInfoLeft = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 400;

  img {
    width: 24px;
    height: 24px;
  }

  p {
    margin: 0 8px;
    color: var(--gray600-color);
  }

  span {
    color: var(--gray400-color);
  }
`;

const AllCardLike = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--gray500-color);

  img {
    margin-right: 8px;
  }
`;
