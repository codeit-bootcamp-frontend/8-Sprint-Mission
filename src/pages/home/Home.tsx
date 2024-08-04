import imgPandaMarketLogo from '../../assets/images/logo/panda-market-logo.png';
import imgFeature1 from '../../assets/images/home/feature1-image.png';
import imgFeatureSearch from '../../assets/images/home/feature-search-img.png';
import imgFeature3 from '../../assets/images/home/feature3-image.png';
import imgFacebookLogo from '../../assets/images/social/facebook-logo.svg';
import imgTwitterLogo from '../../assets/images/social/twitter-logo.svg';
import imgYoutubeLogo from '../../assets/images/social/youtube-logo.svg';
import imgInstagramLogo from '../../assets/images/social/instagram-logo.svg';
import './Home.css';

function Home() {
  return (
    <>
      {/* <header>
        <a href="/">
          <img src={imgPandaMarketLogo} alt="판다마켓 홈" width="153" />
        </a>
        <a href="/signin" id="login-link-button" className="button">
          로그인
        </a>
      </header> */}
      <main>
        <section id="hero" className="banner">
          <div className="wrapper">
            <h1>
              일상의 모든 물건을
              <br />
              거래해 보세요
            </h1>
            <a href="/items" className="button pill-button">
              구경하러 가기
            </a>
          </div>
        </section>
        <section id="features" className="wrapper">
          <div className="feature">
            <img src={imgFeature1} alt="인기 상품" width="50%" />
            <div className="feature-content">
              <h2 className="feature-tag">Hot item</h2>
              <h1>
                인기 상품을
                <br />
                확인해 보세요
              </h1>
              <p className="feature-description">
                가장 HOT한 중고거래 물품을
                <br />
                판다마켓에서 확인해 보세요
              </p>
            </div>
          </div>
          <div className="feature">
            <img
              src={imgFeatureSearch}
              alt="검색 기능 소개 이미지"
              width="50%"
            />
            <div className="feature-content">
              <h2 className="feature-tag">Search</h2>
              <h1>
                구매를 원하는
                <br />
                상품을 검색하세요
              </h1>
              <p className="feature-description">
                구매하고 싶은 물품은 검색해서
                <br />
                쉽게 찾아보세요
              </p>
            </div>
          </div>
          <div className="feature">
            <img src={imgFeature3} alt="판매 상품 등록" width="50%" />
            <div className="feature-content">
              <h2 className="feature-tag">Register</h2>
              <h1>
                판매를 원하는
                <br />
                상품을 등록하세요
              </h1>
              <p className="feature-description">
                어떤 물건이든 판매하고 싶은 상품을
                <br />
                쉽게 등록하세요
              </p>
            </div>
          </div>
        </section>
        <section id="bottom-banner" className="banner">
          <div className="wrapper">
            <h1>
              믿을 수 있는
              <br />
              판다마켓 중고거래
            </h1>
          </div>
        </section>
      </main>
      <footer>
        <div>©codeit - 2024</div>
        <nav id="footer-menu" aria-label="Footer Navigation">
          <a href="/privacy">Privacy Policy</a>
          <a href="/faq">FAQ</a>
        </nav>
        <section id="social-media" aria-label="Social Media Links">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={imgFacebookLogo} alt="페이스북" width="20" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={imgTwitterLogo} alt="트위터" width="20" />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={imgYoutubeLogo} alt="유튜브" width="20" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={imgInstagramLogo} alt="인스타그램" width="20" />
          </a>
        </section>
      </footer>
    </>
  );
}

export default Home;
