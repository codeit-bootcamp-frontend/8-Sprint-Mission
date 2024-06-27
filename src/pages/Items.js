import "../styles/Items.css";

import Header from "../components/Header";
import BestProductsList from "../components/BestProductsList";
import SalesProductsList from "../components/SalesProductsList";
import ProductsPaginaitonBtns from "../components/ProductsPaginaitonBtnGroup";

import { getProducts } from "../api/api";
import { useState, useEffect } from "react";
import { useMediaCheck } from "../hooks/useMediaCheck";

function Items() {
  const [bestProducts, setBestProducts] = useState([]);
  const [salesProducts, setSalesProducts] = useState([]);
  const [pageCount, setPageCount] = useState(null);
  const [pageBtnNumList, setpageBtnNumList] = useState([1, 2, 3, 4, 5]);

  /**
   * api 요청 (GET)
   * @param {string} listType - bestProducts/salesProducts
   * @param {string} orderBy - favorite/recent
   * @param {num} page - page
   * @param {num} pageSize - pagesize
   * @return productsList, totalCount를 리턴
   */
  const handleProductLoad = async ({
    listType = "salesProducts",
    ...options
  }) => {
    const { list, totalCount } = await getProducts(options);
    if (listType === "bestProducts") {
      setBestProducts(list);
    } else if (listType === "salesProducts") {
      setSalesProducts(list);
    } else {
      throw new Error(
        "handleProductLoad의 listType으로 적절한 값을 입력하세요. (bestProducts, salesProducts)"
      );
    }
    return { productsList: list, totalCount };
  };

  useEffect(() => {
    console.log(isTablit);
  }, [isTablit]);

  return (
    <>
      <Header pageType="item" />
      <main className="product-lists">
        <BestProductsList />
        <SalesProductsList />
      </main>
      <ProductsPaginaitonBtns pageBtnNumList={pageBtnNumList} />
    </>
  );
}

export default Items;
