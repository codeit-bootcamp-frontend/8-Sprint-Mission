import { LinkButton } from "@/styles/ButtonStyle";
import Head from "next/head";
import styled from "styled-components";
import KeyVisualImage from "../../public/images/keyvisual.png";
import Card from "@/components/Home/Card";
import CardImage1 from "../../public/images/card01.png";
import CardImage2 from "../../public/images/card02.png";
import CardImage3 from "../../public/images/card03.png";

const CardTexts = [
  {
    image: CardImage1.src,
    topText: "Hot item",
    middleText: (
      <>
        인기 상품을
        <br />
        확인해 보세요
      </>
    ),
    bottomText: (
      <>
        가장 HOT한 중고거래 물품을
        <br />
        판다 마켓에서 확인해 보세요
      </>
    ),
    align: "left",
  },
  {
    image: CardImage2.src,
    topText: "Search",
    middleText: (
      <>
        구매를 원하는
        <br />
        상품을 검색하세요
      </>
    ),
    bottomText: (
      <>
        가장 HOT한 중고거래 물품을
        <br />
        판다 마켓에서 확인해 보세요
      </>
    ),
    align: "right",
  },
  {
    image: CardImage3.src,
    topText: "Register",
    middleText: (
      <>
        판매를 원하는
        <br />
        상품을 등록하세요
      </>
    ),
    bottomText: (
      <>
        어떤 물건이든 판매하고 싶은 상품을
        <br />
        쉽게 등록하세요
      </>
    ),
    align: "left",
  },
];

export default function Home() {
  return (
    <MainTag>
      <KeyVisual>
        <KeyVisualWrap>
          <KeyVisualTitle>
            일상의 모든 물건을
            <br /> 거래해 보세요
          </KeyVisualTitle>
          <LinkButton href="" radius={true}>
            구경하러 가기
          </LinkButton>
        </KeyVisualWrap>
      </KeyVisual>
      {CardTexts.map((CardText, index) => {
        return (
          <Card
            key={index}
            image={CardText.image}
            topText={CardText.topText}
            middleText={CardText.middleText}
            bottomText={CardText.bottomText}
            align={CardText.align}
          />
        );
      })}
      <Banner>
        <BannerWrap>배너여역</BannerWrap>
      </Banner>
    </MainTag>
  );
}

const MainTag = styled.main``;

const KeyVisual = styled.section`
  width: 100%;
  height: 540px;
  padding-bottom: 100px;
  background-image: url(${KeyVisualImage.src});
  background-position: 60% 100%;
  background-size: 746px;
  background-repeat: no-repeat;
  background-color: #cfe5ff;
  ${LinkButton} {
    width: 357px;
    height: 56px;
    font-size: 2rem;
    font-weight: 600;
  }
`;

const KeyVisualWrap = styled.main`
  width: 100%;
  max-width: 1160px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 20px;
  margin: 0 auto;
`;

const KeyVisualTitle = styled.h2`
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 32px;
`;

const Banner = styled.section``;

const BannerWrap = styled.div``;
