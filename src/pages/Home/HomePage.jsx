import { Link } from "react-router-dom";
import "./home.css";
import pandaLogo from "../../images/logo_image.png";
import hotItemImg from "../../images/Img_home_01.png";
import searchImg from "../../images/Img_home_02.png";
import resisterImg from "../../images/Img_home_03.png";
import facebookIcon from "../../images/ic_facebook.png";
import twitterIcon from "../../images/ic_twitter.png";
import youtubeIcon from "../../images/ic_youtube.png";
import instagramIcon from "../../images/ic_instagram.png";

function HomePage() {
  return (
    <>
      <header>
        <a href="/">
          <img rel="icon" src={pandaLogo} alt="판다마켓 로고" />
        </a>
        <a href="../login/login.html">
          <button className="login-button">로그인</button>
        </a>
      </header>

      <main>
        <section className="top-section">
          <div className="container">
            <div className="ment">
              <p>일상의 모든 물건을 거래해보세요</p>
            </div>
            <Link to="/market">
              <button className="lookfor-button">구경하러 가기</button>
            </Link>
          </div>
        </section>
        <section className="main-section">
          <div className="hot-item img">
            <img
              id="hot-item-img"
              src={hotItemImg}
              alt="인기 상품 확인 이미지"
            />
          </div>
          <div className="hot-item text">
            <p className="title">Hot item</p>
            <p className="ment-doit">인기 상품을 확인해 보세요</p>
            <p className="small-ment-doit">
              가장 HOT한 중고거래 물품을
              <br />
              판다 마켓에서 확인해 보세요
            </p>
          </div>

          <div className="search img">
            <img id="search-img" src={searchImg} alt="상품 검색 이미지" />
          </div>
          <div className="search text">
            <p className="title">Search</p>
            <p className="ment-doit">구매를 원하는 상품을 검색하세요</p>
            <p className="small-ment-doit">
              구매하고 싶은 물품은 검색해서
              <br />
              쉽게 찾아보세요
            </p>
          </div>

          <div className="register img">
            <img id="resister-img" src={resisterImg} alt="상품 등록 이미지" />
          </div>
          <div className="register text">
            <p className="title">Register</p>
            <p className="ment-doit">판매를 원하는 상품을 등록하세요</p>
            <p className="small-ment-doit">
              어떤 물건이든 판매하고 싶은 상품을
              <br />
              쉽게 등록하세요
            </p>
          </div>
        </section>
        <section className="bottom-section">
          <div className="container">
            믿을 수 있는
            <br />
            판다마켓 중고거래
          </div>
        </section>

        <footer>
          <div className="footer-container">
            <p className="codeit">@codeit - 2024</p>
            <div className="help">
              <a className="help" href="/privacy">
                Privacy Policy
              </a>
              <a className="help" href="/faq">
                FAQ
              </a>
            </div>
            <div className="icon_sns">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img rel="icon" src={facebookIcon} alt="페이스북 아이콘" />
              </a>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img rel="icon" src={twitterIcon} alt="트위터 아이콘" />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img rel="icon" src={youtubeIcon} alt="유튜브 아이콘" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img rel="icon" src={instagramIcon} alt="인스타그램 아이콘" />
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export default HomePage;
