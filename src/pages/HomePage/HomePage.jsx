import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.scss";
import "../../styles/global.scss";

import homeImg1 from "../../assets/HomePage/Img_home_01.png";
import homeImg2 from "../../assets/HomePage/Img_home_02.png";
import homeImg3 from "../../assets/HomePage/Img_home_03.png";

function HomePage() {
  return (
    <main className="homeMain">
      {/* Banner: Top */}
      <section className="homeMain__top homeMain__banner">
        <div className="homeMain__desc">
          <h1 className="homeMain__title--h1">
            일상의 모든 물건을 거래해 보세요
          </h1>
          <Link to="/items" className="globalBtn globalBtn--large">
            구경하러 가기
          </Link>
        </div>
      </section>
      {/* Main-Content */}
      <section className="homeMain__section">
        <div className="homeMain__content">
          <img src={homeImg1} alt="홈 이미지 1" />
          <div className="homeMain__serviceContainer">
            <p className="homeMain__serviceTitle">Hot Item</p>
            <h2 className="homeMain__title--h2">인기 상품을 확인해 보세요</h2>
            <p className="homeMain__serviceDesc">
              가장 HOT한 중고거래 물품을
              <br />
              판다 마켓에서 확인해 보세요
            </p>
          </div>
        </div>
      </section>
      <section className="homeMain__section">
        <div className="homeMain__content homeMain__content--reverse">
          <img src={homeImg2} alt="홈 이미지 2" />
          <div className="homeMain__serviceContainer">
            <p className="homeMain__serviceTitle">Search</p>
            <h2 className="homeMain__title--h2">
              구매를 원하는 상품을 검색하세요
            </h2>
            <p className="homeMain__serviceDesc">
              구매하고 싶은 물품은 검색해서
              <br />
              쉽게 찾아보세요
            </p>
          </div>
        </div>
      </section>
      <section className="homeMain__section">
        <div className="homeMain__content">
          <img src={homeImg3} alt="홈 이미지 3" />
          <div className="homeMain__serviceContainer">
            <p className="homeMain__serviceTitle">Register</p>
            <h2 className="homeMain__title--h2">
              판매를 원하는 상품을 등록하세요
            </h2>
            <p className="homeMain__serviceDesc">
              어떤 물건이든 판매하고 싶은 상품을
              <br />
              쉽게 등록하세요
            </p>
          </div>
        </div>
      </section>
      {/* Banner: Bottom */}
      <section className="homeMain__bottom homeMain__banner">
        <div className="homeMain__desc">
          <h1 className="homeMain__title--h1">
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
