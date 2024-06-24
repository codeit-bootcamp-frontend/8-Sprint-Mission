import mainFisrtImg from "../../assets/images/main_first.png";
import mainSecondImg from "../../assets/images/main_second.png";
import mainThirdImg from "../../assets/images/main_third.png";

function HomeSections() {
  return (
    <div className="main-container">
      <section className="main-sections">
        <img src={mainFisrtImg} className="main-img" />
        <div className="main-txt">
          <span className="section-logo">Hot item</span>
          <p className="section-title">
            인기 상품을&nbsp;
            <br className="br-tag" />
            확인해 보세요
          </p>
          <p className="section-detail">
            가장 HOT한 중고거래 물품을
            <br />
            판다 마켓에서 확인해 보세요
          </p>
        </div>
      </section>

      <section className="main-sections">
        <img src={mainSecondImg} className="main-img" />
        <div className="main-txt">
          <span className="section-logo">Search</span>
          <p className="section-title">
            구매를 원하는
            <br className="br-tag" />
            &nbsp;상품을 검색하세요
          </p>
          <p className="section-detail">
            구매하고 싶은 물품은 검색해서
            <br />
            쉽게 찾아보세요
          </p>
        </div>
      </section>

      <section className="main-sections">
        <img src={mainThirdImg} className="main-img" />
        <div className="main-txt">
          <span className="section-logo">Register</span>
          <p className="section-title">
            판매를 원하는&nbsp;
            <br className="br-tag" />
            상품을 등록하세요
          </p>
          <p className="section-detail">
            어떤 물건이든 판매하고 싶은 상품을
            <br />
            쉽게 등록하세요
          </p>
        </div>
      </section>
    </div>
  );
}

export default HomeSections;
