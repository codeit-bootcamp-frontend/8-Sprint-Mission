function Home() {
  return (
    <>
      <div className="main-wrap">
        <section className="keyvisual">
          <div className="keyvisual-wrap max-wrap">
            <div className="keyvisual-txt">
              <h2>
                일상의 모든 물건을
                <br />
                거래해 보세요
              </h2>
              <a href="/items.html" className="item-btn">
                구경하러 가기
              </a>
            </div>
          </div>
        </section>

        <section className="card">
          <div className="card-wrap max-wrap">
            <div className="card-img">
              <img
                src="/images/card01-big.png"
                alt="인기 사품을 확인해 보세요 이미지"
              />
            </div>
            <div className="card-txt">
              <span>Hot item</span>
              <h2>
                인기 상품을
                <br />
                확인해 보세요
              </h2>
              <p>
                가장 HOT한 중고거래 물품을
                <br />
                판다 마켓에서 확인해 보세요
              </p>
            </div>
          </div>
        </section>

        <section className="card">
          <div className="card-wrap right max-wrap">
            <div className="card-txt">
              <span>Search</span>
              <h2>
                구매를 원하는
                <br />
                상품을 검색하세요
              </h2>
              <p>
                구매하고 싶은 물품은 검색해서
                <br />
                쉽게 찾아보세요
              </p>
            </div>
            <div className="card-img">
              <img
                src="/images/card02-big.png"
                alt="구매를 원하는 상품을 검색하세요 이미지"
              />
            </div>
          </div>
        </section>

        <section className="card">
          <div className="card-wrap max-wrap">
            <div className="card-img">
              <img
                src="/images/card03-big.png"
                alt="판매를 원하는 상품을 등록하세요 이미지"
              />
            </div>
            <div className="card-txt">
              <span>Register</span>
              <h2>
                판매를 원하는
                <br />
                상품을 등록하세요
              </h2>
              <p>
                어떤 물건이든 판매하고 싶은 상품을
                <br />
                쉽게 등록하세요
              </p>
            </div>
          </div>
        </section>

        <article className="banner">
          <div className="banner-wrap max-wrap">
            <h2>
              믿을 수 있는
              <br />
              판다마켓 중고거래
            </h2>
          </div>
        </article>
      </div>
    </>
  );
}

export default Home;
