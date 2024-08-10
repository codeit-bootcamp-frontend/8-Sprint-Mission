import styled from "styled-components";
import BestIconImage from "../../../public/images/i-best.png";
import TestImg from "../../../public/images/test-img.png";
import LikeImage from "../../../public/images/i-like.png";
import Link from "next/link";

const BestBoardCard = () => {
  return (
    <BestCardWrap>
      <BestIcon>
        <img src={BestIconImage.src} alt="베스트 아이콘 이미지" />
        <span>Best</span>
      </BestIcon>
      <BestCardContent>
        <BestCardTitle href="">
          맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야하나요?
        </BestCardTitle>
        <BestCardImage>
          <img src={TestImg.src} alt="게시글 이미지" />
        </BestCardImage>
      </BestCardContent>
      <BestCardInfo>
        <CardInfoLeft>
          총명한판다
          <span>
            <img src={LikeImage.src} alt="하트 이미지" />
            9999+
          </span>
        </CardInfoLeft>
        <CardInfoDate>2024.04.18</CardInfoDate>
      </BestCardInfo>
    </BestCardWrap>
  );
};

export default function BestBoard() {
  return (
    <BestBoardWrap>
      <BoardTitle>베스트 게시글</BoardTitle>
      <BestBoardCard />
    </BestBoardWrap>
  );
}

const BestBoardWrap = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;
`;

const BoardTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 24px;
`;

const BestCardWrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 385px;
  height: 170px;
  padding: 46px 24px 9px 24px;
  border-radius: 8px;
  background-color: #f9fafb;

  span {
    display: inline-block;
    font-size: 1.6rem;
    font-weight: 600;
    padding-top: 3px;
    color: #ffffff;
  }
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
`;

const BestCardContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 18px;
`;

const BestCardTitle = styled(Link)`
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

const BestCardInfo = styled.div``;

const CardInfoLeft = styled.div``;

const CardInfoDate = styled.span``;
