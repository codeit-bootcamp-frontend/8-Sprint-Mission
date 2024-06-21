import "../styles/ItemPage.css";

import { getProducts } from "../api/api.js";
import { useState, useEffect } from "react";

import ProductCard from "../components/ProductCard";
import Header from "../components/Header.js";

function ItemPage() {
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [onSalesProducts, setOnSalesProducts] = useState([]);

  /**
   * Product를 api에서 불러와서 products를 set해주는 함수
   * @param {string} listType - 베스트상품(favoriteProducts)/판매중인상품(onSalesProducts) 선택
   * @param {object} options - api.js 의 getProducts 함수 의  query option
   * @return {object} - 받아온 json파일의 list와 totalCount를 return
   */
  const handleProductLoad = async ({
    listType = "onSalesProducts",
    ...options
  }) => {
    const { list, totalCount } = await getProducts(options);
    if (listType === "favoriteProducts") {
      setFavoriteProducts(list);
    } else if (listType === "onSalesProducts") {
      setOnSalesProducts(list);
    }
    return { productsList: list, totalCount };
  };

  // favoriteProducts를 불러옴
  useEffect(() => {
    handleProductLoad({
      listType: "favoriteProducts",
      orderBy: "favorite",
      pageSize: 4,
    });
  }, []);

  // onSalesProducts를 불러옴
  useEffect(() => {
    handleProductLoad({
      listType: "onSalesProducts",
      orderBy: "recent",
    });
  }, []);

  return (
    <>
      <Header pageType="item" />
      <div className="products-container">
        <div className="favorite-container">
          <h2 className="product-cards-title">베스트 상품</h2>
          <div className="favorite-cards-container">
            {favoriteProducts.map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
        </div>
        <div className="onsales-container">
          <div>
            <h2 className="product-cards-title">판매 중인 상품</h2>
            <div>검색창</div>
            <div>상품 등록하기</div>
            <div>최신순/좋아요순</div>
          </div>
          <div className="onsales-cards-container">
            {onSalesProducts.map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default ItemPage;
