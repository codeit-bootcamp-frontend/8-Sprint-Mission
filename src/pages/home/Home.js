import NavBar from '../../components/NavBar/NavBar.js';
import '../home/Home.css';
function Home() {
  return (
    <div className="home-container">
      <NavBar />
      <header>
        <div className="header-contents-background">
          <div className="header-content">
            <div className="header-text-image">
              <div className="slogan">
                일상의 모든 물건을
                <br />
                거래해 보세요
              </div>
              <a href="/items" className="look-around-link">
                구경하러 가기
              </a>
            </div>
          </div>
        </div>
      </header>
      <main className="section-container">
        <section>
          <div className="section-box">
            <img
              src={require('../../assets/images/mainPage/Img_home_hot_item.png')}
              alt="인기 상품 기능 소개 이미지"
              className="section-image"
            />
            <div className="contents">
              <div className="content-category">Hot item</div>
              <div className="content-title">
                인기 상품을
                <br />
                확인해 보세요
              </div>
              <div className="content-text">
                가장 HOT한 중고거래 물품을
                <br />
                판다 마켓에서 확인해 보세요
              </div>
            </div>
          </div>
        </section>
        <section className="reverse">
          <div className="section-box">
            <div className="contents">
              <div className="content-category">Search</div>
              <div className="content-title">
                구매를 원하는
                <br />
                상품을 검색하세요
              </div>
              <div className="content-text">
                구매하고 싶은 물품은 검색해서
                <br />
                쉽게 찾아보세요
              </div>
            </div>
            <img
              src={require('../../assets/images/mainPage/Img_home_item_search.png')}
              alt="검색 기능 소개 이미지"
              className="section-image"
            />
          </div>
        </section>
        <section>
          <div className="section-box">
            <img
              src={require('../../assets/images/mainPage/Img_home_for_sale_item.png')}
              alt="상품 등록 기능 소개 이미지"
              className="section-image"
            />
            <div className="contents">
              <div className="content-category">Register</div>
              <div className="content-title">
                판매를 원하는
                <br />
                상품을 등록하세요
              </div>
              <div className="content-text">
                어떤 물건이든 판매하고 싶은 상품을
                <br />
                쉽게 등록하세요
              </div>
            </div>
          </div>
        </section>
      </main>
      <section className="bottom-contents">
        <div className="bottom-contents-background">
          <div className="bottom-text-image">
            <div className="bottom-text">
              <div className="slogan">
                믿을 수 있는
                <br />
                판다마켓 중고거래
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer-link-bar-background">
        <div className="footer-link-bar">
          <address className="codeit">@codeit - 2024</address>
          <div className="privacy-faq-box">
            <div>
              <a href="privacy" className="privacy">
                Privacy Policy
              </a>
            </div>
            <div>
              <a href="faq" className="faq">
                FAQ
              </a>
            </div>
          </div>
          <nav className="sns-links">
            <ul>
              <li>
                <a href="/facebook" target="_blank" rel="noopener norefferer">
                  <img
                    className="sns-link-mini"
                    src={require('../../assets/images/icon/ic_facebook.png')}
                    alt="sns-link-facebook"
                  />
                </a>
              </li>
              <li>
                <a href="/twitter" target="_blank" rel="noopener norefferer">
                  <img
                    className="sns-link-mini"
                    src={require('../../assets/images/icon/ic_twitter.png')}
                    alt="sns-link-twitter"
                  />
                </a>
              </li>
              <li>
                <a href="/youtube" target="_blank" rel="noopener norefferer">
                  <img
                    className="sns-link-mini"
                    src={require('../../assets/images/icon/ic_youtube.png')}
                    alt="sns-link-youtube"
                  />
                </a>
              </li>
              <li>
                <a href="/instagram" target="_blank" rel="noopener norefferer">
                  <img
                    className="sns-link-mini"
                    src={require('../../assets/images/icon/ic_instagram.png')}
                    alt="sns-link-instagram"
                  />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default Home;
