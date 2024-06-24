import "../styles/Home.css";

import mainTopImgUrl from "../assets/img_home_top.png";
import registerImgUrl from "../assets/img_home_register.png";
import searchImgUrl from "../assets/img_home_search.png";
import itemsImgUrl from "../assets/img_home_items.png";
import mainBottomImgUrl from "../assets/img_home_bottom.png";

import Header from "../components/Header";
import MainTop from "../components/MainTop";
import MainContent from "../components/MainContent";
import MainBottom from "../components/MainBottom";
import Footer from "../components/Footer";

import { Link } from "react-router-dom";

const MAIN_TOP_DETAILS = {
  imgUrl: mainTopImgUrl,
  mainTopContent: "일상의 모든 물건을\n거래해 보세요",
  buttonContent: "구경하러가기",
};

const MAIN_CONTENTS_DETAILS = [
  {
    imgUrl: registerImgUrl,
    title: "Hot item",
    mainContent: "인기 상품을\n확인해 보세요",
    subContent: "가장 HOT한 중고거래 물품을\n판다 마켓에서 확인해보세요",
  },
  {
    imgUrl: searchImgUrl,
    title: "Search",
    mainContent: "구매를 원하는\n상품을 검색하세요",
    subContent: "구매하고 싶은 물품은 검색해서\n쉽게 찾아보세요",
    align: "right",
  },
  {
    imgUrl: itemsImgUrl,
    title: "Register",
    mainContent: "판매를 원하는\n상품을 등록하세요",
    subContent: "어떤 물건이든 판매하고 싶은 상품을\n쉽게 등록하세요",
  },
];

const MAIN_BOTTOM_DETAILS = {
  imgUrl: mainBottomImgUrl,
  mainBottomContent: "믿을 수 있는\n판다마켓 중고거래",
};

function Home() {
  return (
    <>
      <Header />
      <section>
        <MainTop mainTopDetails={MAIN_TOP_DETAILS} />
        {MAIN_CONTENTS_DETAILS.map((contentDetail) => (
          <MainContent contentDetail={contentDetail} />
        ))}
        <MainBottom mainBottomDetails={MAIN_BOTTOM_DETAILS} />
      </section>
      <Footer />

      <Link to="/login">Go login page</Link>
      <div></div>
      <Link to="/signin">Go signin page</Link>
      <div></div>
      <Link to="/items">Go item page</Link>
    </>
  );
}

export default Home;
