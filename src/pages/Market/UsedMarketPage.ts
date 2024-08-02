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
  };

  const getProductsPageSize = (pcPageSize, tabletPageSize, mobilePageSize) => {
    if (isPc) return pcPageSize;
    else if (isTablet) return tabletPageSize;
    else if (isMobile) return mobilePageSize;
    else return;
  };

  useEffect(() => {
    if (isMediaQueryInValid) return;

    const pageSize = getProductsPageSize(4, 2, 1);

    handleProductLoad({
      listType: "bestProducts",
      orderBy: "favorite",
      pageSize,
    });
  }, [isMediaQueryInValid, isPc, isTablet, isMobile]);

  useEffect(() => {
    if (isMediaQueryInValid) return;

    const pageSize = getProductsPageSize(10, 6, 4);

    handleProductLoad({
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