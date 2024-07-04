import "./UsedMarketPage.css";

import Header from "../../components/@shared/Header/Header";
import BestProductsList from "../../components/Market/BestProductsList/BestProductsList";
import SalesProductsList from "../../components/Market/SalesProductsList/SalesProductsList";
import ProductsPaginaitonBtns from "../../components/Market/SalesProductsList/ProductsPaginaitonBtns";

import { getProducts } from "../../api/api";
import { useState, useEffect } from "react";
import useMediaCheck from "../../hooks/useMediaCheck";

function UsedMarketPage() {
  const [isMediaQueryInValid, isPc, isTablet, isMobile] = useMediaCheck();
  const [bestProducts, setBestProducts] = useState([]);
  const [salesProducts, setSalesProducts] = useState([]);
  const [salesProductsOrder, setSalesProductsOrder] = useState("recent");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPageCount, setTotalPageCount] = useState(null);
  const [pageBtnNumList, setPageBtnNumList] = useState([]);

  /**
   * bestProducts 의 경우 API 요청만 실행
   * salesProducts 의 경우 API 요청 및 totalPageCount 값 생성
   * @param {string} listType - bestProducts/salesProducts
   * @param {string} orderBy - favorite/recent
   * @param {num} page - page
   * @param {num} pageSize - pagesize
   * @return productsList, totalCount를 리턴
   */
  const handleProductLoad = async ({
    listType = "salesProducts",
    orderBy,
    page = 1,
    pageSize,
  }) => {
    const { list, totalCount } = await getProducts({ orderBy, page, pageSize });
    const pageCount = Math.ceil(totalCount / pageSize);

    if (listType === "bestProducts") {
      setBestProducts(list);
    } else if (listType === "salesProducts") {
      setSalesProducts(list);
      setTotalPageCount(pageCount);
      setCurrentPage(page);
    } else {
      throw new Error(
        "handleProductLoad의 listType으로 적절한 값을 입력하세요. (bestProducts, salesProducts)"
      );
    }
    return { list, totalCount };
  };

  /**
   * 현재 width에 따라서 알맞는 pageSize를 리턴하는 함수
   * @param {number} pcPageSize
   * @param {number} tabletPageSize
   * @param {number} mobilePageSize
   * @returns - 파라미터로 넣은 값 중 현재 화면에 알맞는 pageSize 리턴
   */
  const getProductsPageSize = (pcPageSize, tabletPageSize, mobilePageSize) => {
    if (isPc) return pcPageSize;
    else if (isTablet) return tabletPageSize;
    else if (isMobile) return mobilePageSize;
    else return;
  };
  // 재사용 함수 useCallback 사용하기

  // 베스트 상품 초기 로드 및 미디어 쿼리 따라서 로드
  // 개선필요 : dependency로 모두 등록하면 한번 바뀌는데 get request가 2번 넘어감
  // favoriteProduct는 처음에 pagesize 4로 받아오고 저장했다가 다시 사용하는 방법으로 바꾸기
  useEffect(() => {
    if (isMediaQueryInValid) return;

    const pageSize = getProductsPageSize(4, 2, 1);

    handleProductLoad({
      listType: "bestProducts",
      orderBy: "favorite",
      pageSize,
    });
  }, [isMediaQueryInValid, isPc, isTablet, isMobile]);

  // 판매 중인 상품 초기 로드 및 미디어 쿼리 따라서 로드
  // 개선필요 : totalPageCount dependency로 인해 get request가 두번 실행됨
  useEffect(() => {
    if (isMediaQueryInValid) return;

    const pageSize = getProductsPageSize(10, 6, 4);

    const { totalCount } = handleProductLoad({
      listType: "salesProducts",
      orderBy: salesProductsOrder,
      pageSize,
    });

    let pageNumList = [];
    for (let i = 1; i <= totalPageCount && i <= 5; i++) {
      pageNumList.push(i);
    }

    while (pageNumList.length < 5) {
      pageNumList.push(null);
    }
    setPageBtnNumList(pageNumList);
  }, [
    totalPageCount,
    salesProductsOrder,
    isMediaQueryInValid,
    isPc,
    isTablet,
    isMobile,
  ]);

  // currentPage 값이 변경될 때 마다 판매 중인 상품 목록 페이지에 알맞은 목록으로 변경
  useEffect(() => {
    if (isMediaQueryInValid) return;

    const pageSize = getProductsPageSize(10, 6, 4);

    handleProductLoad({
      listType: "salesProducts",
      orderBy: salesProductsOrder,
      page: currentPage,
      pageSize,
    });
  }, [currentPage]);

  return (
    <>
      <Header pageType="item" />
      <main className="product-lists">
        <BestProductsList bestProducts={bestProducts} />
        <SalesProductsList
          salesProducts={salesProducts}
          order={salesProductsOrder}
          onChangeOrder={setSalesProductsOrder}
        />
      </main>
      <ProductsPaginaitonBtns
        pageBtnNumList={pageBtnNumList}
        setPageBtnNumList={setPageBtnNumList}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPageCount={totalPageCount}
      />
    </>
  );
}

export default UsedMarketPage;
