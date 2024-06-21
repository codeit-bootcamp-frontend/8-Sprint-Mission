import { useEffect, useState } from "react";
import SalesProductCardList from "../../components/salesProducts/SalesProductCardList";

import Title from "../../core/titles/Title";
import fetchProduct from "../../lib/api/product";

import "./sales-products.css";
import SearchInput from "../../core/search/SearchInput";
import Dropdown from "../../core/dropdown/Dropdown";
import BtnSmall from "../../core/buttons/BtnSmall";
import PagiNation from "../../components/salesProducts/PagiNation";
import useResize from "../../lib/hooks/useResize";

const SalesProducts = () => {
  const [salesProducts, setSalesProducts] = useState([]);
  const [order, setOrder] = useState("recent");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const getSalesPageSize = (width) => {
    if (1200 <= width) {
      return 10;
    }
    if (768 <= width) {
      return 6;
    }
    return 4;
  };
  const size = useResize({ getPageSize: getSalesPageSize });

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
    const newTotalPage = Math.ceil(totalCount / size);
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
      currentPage: 1,
      pageSize: size,
      orderBy: newOrder,
      searchKeyword: "",
    });
    setCurrentPage(1);
  };

  const handleSearch = (e) => {
    handleSalesProducts({
      currentPage: 1,
      pageSize: size,
      orderBy: order,
      searchKeyword: e.target.value,
    });
    setCurrentPage(1);
  };

  const handleCurrentPage = (e) => {
    const newCurrentPage = Number(e.target.innerText);
    setCurrentPage(newCurrentPage);
    handleSalesProducts({
      currentPage: newCurrentPage,
      pageSize: size,
      orderBy: order,
      searchKeyword: "",
    });
  };

  useEffect(() => {
    handleSalesProducts({
      currentPage: 1,
      pageSize: size,
      orderBy: "recent",
      searchKeyword: "",
    });
  }, [size]);

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
        <div className="products-container">
          <SalesProductCardList salesProducts={salesProducts} />
          <PagiNation
            currentPage={currentPage}
            handleCurrentPage={handleCurrentPage}
            totalPage={totalPage}
          />
        </div>
      ) : (
        <p>{errorMessage.message}</p>
      )}
    </section>
  );
};

export default SalesProducts;
