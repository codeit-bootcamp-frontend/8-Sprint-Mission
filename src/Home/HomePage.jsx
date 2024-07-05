import { Helmet } from 'react-helmet-async';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>판다마켓</title>
      </Helmet>
      <main>
        <section class='banner hero'>
          <div class='wrapper'>
            <h2>
              일상의 모든 물건을
              <br />
              거래해 보세요
            </h2>
            <a href='items.html' class='button pill'>
              구경하러 가기
            </a>
          </div>
        </section>

        <section class='wrapper features'>
          <div class='feature'>
            <img src='images/home/feature1_hot_item.png' alt='인기 상품' />
            <div class='feature-content'>
              <h3>Hot Item</h3>
              <h2>
                인기 상품을
                <br />
                확인해 보세요
              </h2>
              <p class='feature-description'>
                가장 HOT한 중고거래 물품을
                <br />
                판다마켓에서 확인해 보세요
              </p>
            </div>
          </div>
          <div class='feature'>
            <img src='images/home/feature2_search.png' alt='검색 기능' />
            <div class='feature-content'>
              <h3>Search</h3>
              <h2>
                구매를 원하는
                <br />
                상품을 검색하세요
              </h2>
              <p class='feature-description'>
                구매하고 싶은 물품은 검색해서
                <br />
                쉽게 찾아보세요
              </p>
            </div>
          </div>
          <div class='feature'>
            <img src='images/home/feature3_register.png' alt='판매 상품 등록' />
            <div class='feature-content'>
              <h3>Register</h3>
              <h2>
                판매를 원하는
                <br />
                상품을 등록하세요
              </h2>
              <p class='feature-description'>
                어떤 물건이든 판매하고 싶은 상품을
                <br />
                쉽게 등록하세요
              </p>
            </div>
          </div>
        </section>

        <section class='banner bottom'>
          <div class='wrapper'>
            <h2>
              믿을 수 있는
              <br />
              판다마켓 중고거래
            </h2>
          </div>
        </section>
      </main>

      <footer>
        <address>©codeit - 2024</address>
        <div class='footer-menu'>
          <a href='privacy.html'>Privacy Policy</a>
          <a href='faq.html'>FAQ</a>
        </div>
        <nav class='social-media'>
          <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'>
            <img src='images\social\ic_facebook.png' alt='페이스북' width='20px' />
          </a>
          <a href='https://twitter.com/' target='_blank' rel='noopener noreferrer'>
            <img src='images\social\ic_twitter.png' alt='트위터' width='20px' />
          </a>
          <a href='https://www.youtube.com/' target='_blank' rel='noopener noreferrer'>
            <img src='images\social\ic_youtube.png' alt='유튜브' width='20px' />
          </a>
          <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
            <img src='images\social\ic_instagram.png' alt='인스타그램' width='20px' />
          </a>
        </nav>
      </footer>
    </>
  );
}

export default HomePage;
