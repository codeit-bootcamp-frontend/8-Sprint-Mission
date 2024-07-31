import home01Img from "../assets/Img_home_01@3x.png";
import home02Img from "../assets/Img_home_02@2x.png";
import home03Img from "../assets/Img_home_03@3x.png";

import "../styles/index.css";
import {
  BannerBottom,
  BannerBottomTitle,
  BannerContainer,
  BannerTop,
  BannerTopTitle,
  Content,
  ContentContainer,
  ContentImg,
  ContentRight,
  ItemLink,
  Main,
} from "../styles/styled/Home";
import bannerTopImage from "../assets/Img_home_top@3x.png";
import bannerBottomImage from "../assets/Img_home_bottom@3x.png";

function Home() {
  return (
    <Main>
      <BannerTop image={bannerTopImage}>
        <BannerContainer>
          <BannerTopTitle>
            <span>일상의 모든 물건을</span>
            <span>거래해보세요</span>
          </BannerTopTitle>
          <ItemLink to="/items">구경하러 가기</ItemLink>
        </BannerContainer>
      </BannerTop>
      <ContentContainer>
        <Content>
          <ContentImg src={home01Img} alt="content" />
          <div className="content-text">
            <span className="badge">Hot item</span>
            <h2>
              <span>인기 상품을</span>
              <span>확인해보세요</span>
            </h2>
            <p>
              <span>가장 HOT한 중고거래 물품을</span>
              <span>판다 마켓에서 확인해 보세요</span>
            </p>
          </div>
        </Content>
        <ContentRight>
          <ContentImg order={1} src={home02Img} alt="content" />
          <div className="content-text">
            <span className="badge">Search</span>
            <h2>
              <span>구매를 원하는</span>
              <span>상품을 검색하세요</span>
            </h2>
            <p>
              <span>구매하고 싶은 물품은 검색해서</span>
              <span>쉽게 찾아보세요</span>
            </p>
          </div>
        </ContentRight>
        <Content>
          <ContentImg src={home03Img} alt="content" />
          <div className="content-text">
            <span className="badge">Register</span>
            <h2>
              <span>판매를 원하는</span>
              <span>상품을 등록하세요</span>
            </h2>
            <p>
              <span>어떤 물건이든 판매하고 싶은 상품을</span>
              <span>쉽게 등록하세요</span>
            </p>
          </div>
        </Content>
      </ContentContainer>
      <BannerBottom image={bannerBottomImage}>
        <BannerContainer>
          <BannerBottomTitle>
            <span>믿을 수 있는</span>
            <span>판다마켓 중고거래</span>
          </BannerBottomTitle>
        </BannerContainer>
      </BannerBottom>
    </Main>
  );
}

export default Home;
