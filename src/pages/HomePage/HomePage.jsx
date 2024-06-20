import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.scss";
import "../../styles/common.scss";

import logo from "../../assets/common/logo.svg";
import logoMobile from "../../assets/common/logo-mobile.svg";
import homeImg1 from "../../assets/HomePage/Img_home_01.png";
import homeImg2 from "../../assets/HomePage/Img_home_02.png";
import homeImg3 from "../../assets/HomePage/Img_home_03.png";
import icFacebook from "../../assets/HomePage/ic_facebook.png";
import icTwitter from "../../assets/HomePage/ic_twitter.png";
import icYoutube from "../../assets/HomePage/ic_youtube.png";
import icInstagram from "../../assets/HomePage/ic_instagram.png";

function HomePage() {
  return (
    <body>
      {/* Global Navigation Bar */}
      <header id="gnb">
        <nav id="heading-nav">
          <Link to="/" className="logo-tablet">
            <img className="logo" src={logo} alt="LOGO" />
          </Link>
          <Link to="/">
            <img className="logo-mobile" src={logoMobile} alt="LOGO" />
          </Link>
          <Link to="/login" className="button btn-small">
            로그인
          </Link>
        </nav>
      </header>
      <main>
        {/* Banner: Top */}
        <section className="home-main-top banner">
          <div className="home-main-desc">
            <h1 className="home-main-title">
              일상의 모든 물건을 거래해 보세요
            </h1>
            <Link to="/items" className="button btn-large">
              구경하러 가기
            </Link>
          </div>
        </section>
        {/* Main-Content */}
        <section className="home-main-section">
          <div className="home-main-content">
            <img src={homeImg1} alt="홈 이미지 1" />
            <div className="home-main-service">
              <p className="service-title">Hot Item</p>
              <h2 className="home-main-title">인기 상품을 확인해 보세요</h2>
              <p className="service-desc">
                가장 HOT한 중고거래 물품을
                <br />
                판다 마켓에서 확인해 보세요
              </p>
            </div>
          </div>
        </section>
        <section className="home-main-section">
          <div className="home-main-content home-main-reverse">
            <img src={homeImg2} alt="홈 이미지 2" />
            <div className="home-main-service">
              <p className="service-title">Search</p>
              <h2 className="home-main-title">
                구매를 원하는 상품을 검색하세요
              </h2>
              <p className="service-desc">
                구매하고 싶은 물품은 검색해서
                <br />
                쉽게 찾아보세요
              </p>
            </div>
          </div>
        </section>
        <section className="home-main-section">
          <div className="home-main-content">
            <img src={homeImg3} alt="홈 이미지 3" />
            <div className="home-main-service">
              <p className="service-title">Register</p>
              <h2 className="home-main-title">
                판매를 원하는 상품을 등록하세요
              </h2>
              <p className="service-desc">
                어떤 물건이든 판매하고 싶은 상품을
                <br />
                쉽게 등록하세요
              </p>
            </div>
          </div>
        </section>
        {/* Banner: Bottom */}
        <section className="home-main-bottom banner">
          <div className="home-main-desc">
            <h1 className="home-main-title">
              믿을 수 있는
              <br />
              판다마켓 중고거래
            </h1>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer>
        <div className="home-main-footer-content">
          <div className="footer-left">
            <p>©codeit - 2024</p>
          </div>
          <div className="footer-center">
            <Link to="/html/privacy.html" target="_blank">
              Privacy Policy
            </Link>
            <Link to="/html/faq.html" target="_blank">
              FAQ
            </Link>
          </div>
          <ul className="footer-right footer-icons">
            <li>
              <a href="https://www.facebook.com/" target="_blank">
                <img src={icFacebook} alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="https://www.x.com/" target="_blank">
                <img src={icTwitter} alt="Twitter" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/" target="_blank">
                <img src={icYoutube} alt="YouTube" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <img src={icInstagram} alt="Instagram" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </body>
  );
}

export default HomePage;
