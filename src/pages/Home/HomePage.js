import mainTopImgUrl from "../../assets/images/img_home_top.png";
import registerImgUrl from "../../assets/images/img_home_register.png";
import searchImgUrl from "../../assets/images/img_home_search.png";
import itemsImgUrl from "../../assets/images/img_home_items.png";
import mainBottomImgUrl from "../../assets/images/img_home_bottom.png";

import Header from "../../components/@shared/Header/Header";
import MainTop from "../../components/Home/MainTop/MainTop";
import MainContent from "../../components/Home/MainContent/MainContent";
import MainBottom from "../../components/Home/MainBottom/MainBottom";
import Footer from "../../components/Home/Footer/Footer";

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

function HomePage() {
  return (
    <>
      <Header />
      <main className="main-section-container">
        <MainTop mainTopDetails={MAIN_TOP_DETAILS} />
        {MAIN_CONTENTS_DETAILS.map((contentDetail) => (
          <MainContent
            key={contentDetail.title}
            contentDetail={contentDetail}
          />
        ))}
        <MainBottom mainBottomDetails={MAIN_BOTTOM_DETAILS} />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;