import "../styles/ItemPage.css";

import searchIcon from "../assets/ic_search.png";

import { getProducts } from "../api/api.js";
import { useState, useEffect } from "react";

import ProductCard from "../components/ProductCard";
import Header from "../components/Header.js";
import Button from "../components/Button.js";
import PageButton from "../components/PageButton.js";

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

  /**
   * event target의 value (order값)을 받아서 api에 요청 보낸 이후 요청 받은 값을 onsales 목록에 display
   * @param {target.value} value
   */
  const handleOnSalesOrder = async (value) => {
    const { productsList } = await handleProductLoad({
      listType: "onSalesProducts",
      orderBy: value,
    });
    setOnSalesProducts(productsList);
  };

  return (
    <>
      <Header pageType="item" />

      <div className="products-container">
        <div className="favorite-container">
          <div className="product-title-and-menus">
            <h2 className="product-cards-title">베스트 상품</h2>
          </div>
          <div className="favorite-cards-container">
            {favoriteProducts.map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
        </div>
        <div className="onsales-container">
          <div className="product-title-and-menus">
            <h2 className="product-cards-title">판매 중인 상품</h2>
            <div className="product-group-menus">
              <input className="searchBar" type="search" />
              <Button className="register-item-button">상품 등록하기</Button>
              <select
                className="product-order-select"
                onChange={(e) => handleOnSalesOrder(e.target.value)}
              >
                <option value="recent">최신순</option>
                <option value="favorite">좋아요순</option>
              </select>
            </div>
          </div>
          <div className="onsales-cards-container">
            {onSalesProducts.map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
        </div>
      </div>

      <div className="page-buttons-container">
        <PageButton option="left"></PageButton>
        <PageButton className="active">1</PageButton>
        <PageButton>2</PageButton>
        <PageButton>3</PageButton>
        <PageButton>4</PageButton>
        <PageButton>5</PageButton>
        <PageButton option="right"></PageButton>
      </div>
    </>
  );
}

export default ItemPage;
