import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import HomeTop from "@/images/Img_home_top.png";
import HomeImg1 from "@/images/Img_home_01.png";
import HomeImg2 from "@/images/Img_home_02.png";
import HomeImg3 from "@/images/Img_home_03.png";

export default function Home() {
  return (
    <Container>
      <Frame>
        <Content>
          <FrameText>
            일상의 모든 물건을
            <MobileLine /> 거래해보세요
          </FrameText>
          <Link href="items/">
            <SeeMoreButton>구경하러가기</SeeMoreButton>
          </Link>
        </Content>
        <Image src={HomeTop} alt="HomeImg" />
      </Frame>

      <Elements>
        <Element>
          <Image src={HomeImg1} alt="HomeImg" />
          <ElementTextLeft>
            <Category>Hot item</Category>
            <ElementMainText>
              인기 상품을 <br />
              확인해보세요{" "}
            </ElementMainText>
            <ElementSubText>
              {" "}
              가장 HOT한 중고거래 물품을 <br />
              판다 마켓에서 확인해 보세요
            </ElementSubText>
          </ElementTextLeft>
        </Element>

        <Element>
          <ElementTextRight>
            <Category>Search</Category>
            <ElementMainText>
              구매를 원하는 <br />
              상품을 검색하세요
            </ElementMainText>
            <ElementSubText>
              구매하고 싶은 물품은 검색해서 <br />
              쉽게 찾아보세요
            </ElementSubText>
          </ElementTextRight>
          <Image src={HomeImg2} alt="HomeImg" />
        </Element>

        <Element>
          <Image src={HomeImg3} alt="HomeImg" />
          <ElementTextLeft>
            <Category>Register</Category>
            <ElementMainText>
              판매를 원하는 <br />
              상품을 등록하세요
            </ElementMainText>
            <ElementSubText>
              어떤 물건이든 판매하고 싶은 상품을 <br />
              쉽게 등록하세요
            </ElementSubText>
          </ElementTextLeft>
        </Element>
      </Elements>
    </Container>
  );
}

const Container = styled.div`
  max-width: 1920px;
`;

const Frame = styled.div`
  position: relative;
  background-color: #cfe5ff;
  display: flex;
  width: 100%;
  height: 540px;
  overflow: hidden;
  padding: 200px 360px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FrameText = styled.p`
  font-size: 40px;
  font-weight: 700;
  white-space: nowrap;
`;

const SeeMoreButton = styled.button`
  background-color: #3692ff;
  color: #ffffff;
  border-radius: 40px;
  display: inline-block;
  margin: 32px 0;
  padding: 16px 124px;
  width: 357px;
  height: 56px;
  font-size: 17px;
  font-weight: 600;
  text-decoration: none;
`;

const MobileLine = styled.br``;

const Elements = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 150px;
  margin: 150px;
`;

const Element = styled.article`
  display: flex;
  gap: 50px;
  align-items: center;
`;
const ElementRight = styled.article``;

const Category = styled.span``;

const ElementTextLeft = styled.div``;

const ElementTextRight = styled.div`
  display: flex;
  width: 100%;
  text-align: right;
  flex-direction: column;
  gap: 30px;
`;

const ElementMainText = styled.p``;

const ElementSubText = styled.p``;
