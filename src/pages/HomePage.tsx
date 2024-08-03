import GlobalNavBar from "components/@shared/GlobalNavBar";
import MainTop from "components/home/MainTop";
import MainContent from "components/home/MainContent";
import MainBottom from "components/home/MainBottom";
import Footer from "components/home/Footer";

import mainTopImg from "../assets/images/img_home_top.png";
import registerImg from "../assets/images/img_home_register.png";
import searchImg from "../assets/images/img_home_register.png";
import itemsImg from "../assets/images/img_home_items.png";
import mainBottomImg from "../assets/images/img_home_bottom.png";

export interface Details {
  imgSrc: string;
  mainContent: string;
}

export interface MainTopDetails extends Details {
  buttonContent: string;
}

export type Align = "right" | "left";

export interface MainContentDetails extends Details {
  title: string;
  subContent: string;
  align?: Align;
}

const MAIN_TOP_DETAILS: MainTopDetails = {
  imgSrc: mainTopImg,
  mainContent: "일상의 모든 물건을\n거래해 보세요",
  buttonContent: "구경하러가기",
};

const MAIN_CONTENTS_DETAILS: MainContentDetails[] = [
  {
    imgSrc: registerImg,
    title: "Hot item",
    mainContent: "인기 상품을\n확인해 보세요",
    subContent: "가장 HOT한 중고거래 물품을\n판다 마켓에서 확인해보세요",
  },
  {
    imgSrc: searchImg,
    title: "Search",
    mainContent: "구매를 원하는\n상품을 검색하세요",
    subContent: "구매하고 싶은 물품은 검색해서\n쉽게 찾아보세요",
    align: "right",
  },
  {
    imgSrc: itemsImg,
    title: "Register",
    mainContent: "판매를 원하는\n상품을 등록하세요",
    subContent: "어떤 물건이든 판매하고 싶은 상품을\n쉽게 등록하세요",
  },
];

const MAIN_BOTTOM_DETAILS: Details = {
  imgSrc: mainBottomImg,
  mainContent: "믿을 수 있는\n판다마켓 중고거래",
};

function HomePage() {
  return (
    <>
      <GlobalNavBar isMain={true} isLogin={false} />
      <MainTop contentDetails={MAIN_TOP_DETAILS} />
      {MAIN_CONTENTS_DETAILS.map((contentDetails) => (
        <MainContent key={contentDetails.title} contentDetails={contentDetails} />
      ))}
      <MainBottom contentDetails={MAIN_BOTTOM_DETAILS} />
      <Footer />
    </>
  );
}

export default HomePage;
