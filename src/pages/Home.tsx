import Main from "components/common/Layout/Main";
import Footer from "components/common/Layout/Footer";
import Button from "components/common/UI/Button";
import bannerTopImg from "assets/images/img_home_top.png";
import bannerBottomImg from "assets/images/img_home_bottom.png";
import hotItemLandingImg from "assets/images/img_home_hotItem.png";
import searchLandingImg from "assets/images/img_home_search.png";
import registerLadingImg from "assets/images/img_home_register.png";

function Home() {
  return (
    <>
      <Main isHome={true}>
        <section className="flex justify-center w-full h-full max-xl:h-full bg-blue-100">
          <div className="flex flex-row justify-center mt-48 gap-4 w-2/3 h-full max-xl:flex-col max-xl:items-center max-xl:gap-48">
            <div className="flex flex-col w-[347px] gap-6 pt-8 max-xl:w-full max-xl:pt-[84px] max-md:pt-[42px] max-xl:items-center">
              <p className="w-80 text-[40px] font-bold text-gray-700 max-xl:w-full max-xl:text-center max-md:w-64 max-md:text-[32px]">
                일상의 모든 물건을 거래해 보세요
              </p>
              <div className="flex flex-row items-center justify-center w-60">
                <Button
                  buttonText="구경하러 가기"
                  className="rounded-3xl w-full py-4  max-md:px-[71px] max-md:py-3"
                />
              </div>
            </div>
            <img
              src={bannerTopImg}
              alt="판다마켓 상단 배너 이미지"
              className="w-2/4 h-full object-cover"
            />
          </div>
        </section>
        <section className="flex flex-col mx-auto my-24 gap-[276px] w-4/6">
          <div className="h-[444px] w-[955px] bg-lightGray flex flex-row gap-16 mr-auto">
            <img
              src={hotItemLandingImg}
              alt="인기 상품 랜딩 이미지"
              className="w-[588px]"
            />
            <div className="flex flex-col gap-3 justify-center">
              <h1 className="text-brand text-lg font-bold">Hot item</h1>
              <h2 className="text-[40px] font-bold">
                인기 상품을 <br /> 확인해보세요
              </h2>
              <p className="text-2xl text-gray-700 font-medium">
                가장 HOT한 중고거래 물품을 <br /> 판다 마켓에서 확인해 보세요
              </p>
            </div>
          </div>
          <div className="h-[444px] w-[955px] bg-lightGray flex flex-row gap-16 justify-end ml-auto">
            <div className="flex flex-col justify-center gap-3 text-right">
              <h1 className="text-brand text-lg font-bold">Search</h1>
              <h2 className="text-[40px] font-bold">
                구매를 원하는 <br /> 상품을 검색하세요
              </h2>
              <p className="text-2xl text-gray-700 font-medium">
                구매하고 싶은 물품은 검색해서 <br /> 쉽게 찾아보세요
              </p>
            </div>
            <img
              src={searchLandingImg}
              alt="상품 검색 랜딩 이미지"
              className="w-[588px]"
            />
          </div>
          <div className="h-[444px] w-[955px] bg-lightGray flex flex-row gap-16  mr-auto">
            <img
              src={registerLadingImg}
              alt="상품 등록 랜딩 이미지"
              className="w-[588px]"
            />
            <div className="flex flex-col gap-3 justify-center">
              <h1 className="text-brand text-lg font-bold">Register</h1>
              <h2 className="text-[40px] font-bold">
                판매를 원하는 <br /> 상품을 등록하세요
              </h2>
              <p className="text-2xl text-gray-700 font-medium">
                어떤 물건이든 판매하고 싶은 상품을 <br /> 쉽게 등록하세요
              </p>
            </div>
          </div>
        </section>
        <section className="flex justify-center w-full h-[540px] max-xl:h-full bg-blue-100 ">
          <div className="flex flex-row mt-auto gap-16 max-xl:flex-col max-xl:gap-0 max-xl:my-auto">
            <p className="my-auto pb-[60px] text-[40px] font-bold text-gray-700 max-xl:text-center max-xl:pb-0">
              믿을 수 있는 <br /> 판다마켓 중고거래
            </p>
            <img
              src={bannerBottomImg}
              alt="판다마켓 하단 배너 이미지"
              className="object-contain"
            />
          </div>
        </section>
      </Main>
      <Footer />
    </>
  );
}

export default Home;
