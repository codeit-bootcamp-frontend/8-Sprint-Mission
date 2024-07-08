import React from "react";
import { Link } from "react-router-dom";
import "@pages/HomePage/HomePage.scss";
import "@styles/global.scss";
import Button from "@components/UI/jsx/Button";

import homeImg1 from "@assets/HomePage/Img_home_01.png";
import homeImg2 from "@assets/HomePage/Img_home_02.png";
import homeImg3 from "@assets/HomePage/Img_home_03.png";

function HomePage() {
  return (
    <main className="homePage">
      {/* Banner: Top */}
      <section className="homePage__top homePage__banner">
        <div className="homePage__desc">
          <h1 className="homePage__title--h1">
            일상의 모든 물건을 거래해 보세요
          </h1>
          <Button to="/items" size="large" innerText="구경하러 가기" />
        </div>
      </section>
      {/* Main-Content */}
      <section className="homePage__section">
        <div className="homePage__content">
          <img src={homeImg1} alt="홈 이미지 1" />
          <div className="homePage__serviceContainer">
            <p className="homePage__serviceTitle">Hot Item</p>
            <h2 className="homePage__title--h2">인기 상품을 확인해 보세요</h2>
            <p className="homePage__serviceDesc">
              가장 HOT한 중고거래 물품을
              <br />
              판다 마켓에서 확인해 보세요
            </p>
          </div>
        </div>
      </section>
      <section className="homePage__section">
        <div className="homePage__content homePage__content--reverse">
          <img src={homeImg2} alt="홈 이미지 2" />
          <div className="homePage__serviceContainer">
            <p className="homePage__serviceTitle">Search</p>
            <h2 className="homePage__title--h2">
              구매를 원하는 상품을 검색하세요
            </h2>
            <p className="homePage__serviceDesc">
              구매하고 싶은 물품은 검색해서
              <br />
              쉽게 찾아보세요
            </p>
          </div>
        </div>
      </section>
      <section className="homePage__section">
        <div className="homePage__content">
          <img src={homeImg3} alt="홈 이미지 3" />
          <div className="homePage__serviceContainer">
            <p className="homePage__serviceTitle">Register</p>
            <h2 className="homePage__title--h2">
              판매를 원하는 상품을 등록하세요
            </h2>
            <p className="homePage__serviceDesc">
              어떤 물건이든 판매하고 싶은 상품을
              <br />
              쉽게 등록하세요
            </p>
          </div>
        </div>
      </section>
      {/* Banner: Bottom */}
      <section className="homePage__bottom homePage__banner">
        <div className="homePage__desc">
          <h1 className="homePage__title--h1">
            믿을 수 있는
            <br />
            판다마켓 중고거래
          </h1>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
