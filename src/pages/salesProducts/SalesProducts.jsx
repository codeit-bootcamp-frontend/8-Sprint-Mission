import { useEffect, useState } from "react";
import SalesProductCardList from "../../components/salesProducts/SalesProductCardList";

import Title from "../../core/titles/Title";
import fetchProduct from "../../lib/api/product";

import "./sales-products.css";
import SearchInput from "../../core/search/SearchInput";
import Dropdown from "../../core/dropdown/Dropdown";
import BtnSmall from "../../core/buttons/BtnSmall";

const PAGE_SIZE = 12;

const SalesProducts = () => {
  const [salesProducts, setSalesProducts] = useState([]);
  const [order, setOrder] = useState("recent");
  const [currnetPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSalesProducts = async (options) => {
    let result;
    try {
      setIsLoading(true);
      setErrorMessage(null);
      result = await fetchProduct(options);
    } catch (error) {
      setErrorMessage(error);
      return;
    } finally {
      setIsLoading(false);
    }
    const { list, totalCount } = result;
    setSalesProducts(list);
    const newTotalPage = Math.ceil(totalCount / PAGE_SIZE);
    setTotalPage(newTotalPage);
  };

  const handleListClick = (e) => {
    if (isLoading) {
      return;
    }
    const newOrder = e.target.innerText === "최신순" ? "recent" : "favorite";

    if (newOrder === order) {
      return;
    }
    setOrder(newOrder);
    handleSalesProducts({
      currnetPage: 1,
      pageSize: PAGE_SIZE,
      orderBy: newOrder,
      searchKeyword: "",
    });
  };

  const handleSearch = (e) => {
    handleSalesProducts({
      currnetPage: 1,
      pageSize: PAGE_SIZE,
      orderBy: order,
      searchKeyword: e.target.value.replace(" ", ""),
    });
  };

  useEffect(() => {
    handleSalesProducts({
      currnetPage: 1,
      pageSize: PAGE_SIZE,
      orderBy: "recent",
      searchKeyword: "",
    });
  }, []);

  return (
    <section className="sales-product-container">
      <div className="sales-header-container">
        <Title>판매 중인 상품</Title>
        <div className="sales-options-container">
          <SearchInput handleSearch={handleSearch} />
          <BtnSmall>상품 등록하기</BtnSmall>
          <Dropdown
            isLoading={isLoading}
            order={order}
            handleListClick={handleListClick}
          />
        </div>
      </div>
      {!errorMessage ? (
        <SalesProductCardList salesProducts={salesProducts} />
      ) : (
        <p>{errorMessage.message}</p>
      )}
    </section>
  );
};

export default SalesProducts;
