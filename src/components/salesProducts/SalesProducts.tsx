import { useCallback, useEffect, useState } from "react";

import useResize from "../../lib/hooks/useResize";
import { fetchGetProduct } from "../../lib/api/product";

import SalesProductCardList from "../../components/salesProducts/SalesProductCardList";
import Title from "../../core/titles/Title";
import SearchInput from "../../core/search/SearchInput";
import Dropdown from "../../core/dropdown/Dropdown";
import PagiNation from "../../components/salesProducts/PagiNation";
import { QueryOptions } from "core/Interface/Product";
import AddItemMoveBtn from "./AddItemMoveBtn";

import "./sales-products.css";

const INITIAL_PRODUCTQUERY = {
  order: "recent",
  currentPage: 1,
  totalPage: 0,
};

interface ProductQuery {
  order: string;
  currentPage: number;
  totalPage: number;
}

const SalesProducts = () => {
  const [salesProducts, setSalesProducts] = useState([]);
  const [productQuery, setProductQuery] =
    useState<ProductQuery>(INITIAL_PRODUCTQUERY);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<Error>();
  const { size } = useResize({ pcSize: 10, tabletSize: 6, mobileSize: 4 });

  const handleSalesProducts = useCallback(
    async (options: QueryOptions) => {
      try {
        setIsLoading(true);
        setErrorMessage(undefined);
        const { list, totalCount } = await fetchGetProduct(options);
        setSalesProducts(list);
        const newTotalPage = Math.ceil(totalCount / size);
        setProductQuery((prev) => ({ ...prev, totalPage: newTotalPage }));
      } catch (error) {
        setErrorMessage(error as Error);
      } finally {
        setIsLoading(false);
      }
    },
    [size]
  );

  const handleListClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const eventTarget = e.target as HTMLElement;
    if (isLoading) {
      return;
    }
    const newOrder = eventTarget.innerText === "최신순" ? "recent" : "favorite";

    if (newOrder === productQuery.order) {
      return;
    }

    handleSalesProducts({
      currentPage: 1,
      pageSize: size,
      orderBy: newOrder,
      searchKeyword: "",
    });
    setProductQuery((prev) => ({ ...prev, order: newOrder, currentPage: 1 }));
  };

  const handleSearch = (keyword: string) => {
    handleSalesProducts({
      currentPage: 1,
      pageSize: size,
      orderBy: productQuery.order,
      searchKeyword: keyword,
    });
    setProductQuery((prev) => ({ ...prev, currentPage: 1 }));
  };

  const handleCurrentPage = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const eventTarget = e.target as HTMLElement;
    const newCurrentPage = Number(eventTarget.innerText);
    setProductQuery((prev) => ({ ...prev, currentPage: newCurrentPage }));
    handleSalesProducts({
      currentPage: newCurrentPage,
      pageSize: size,
      orderBy: productQuery.order,
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
  }, [size, handleSalesProducts]);

  return (
    <section className="sales-product-container">
      <div className="sales-header-container">
        <Title>판매 중인 상품</Title>
        {/* <div className="sales-options-container"> */}
        <SearchInput handleSearch={handleSearch} />
        <AddItemMoveBtn />
        <Dropdown
          isLoading={isLoading}
          order={productQuery.order}
          handleListClick={handleListClick}
        />
        {/* </div> */}
      </div>
      {!errorMessage ? (
        <div className="products-container">
          <SalesProductCardList salesProducts={salesProducts} />
          <PagiNation
            currentPage={productQuery.currentPage}
            handleCurrentPage={handleCurrentPage}
            totalPage={productQuery.totalPage}
          />
        </div>
      ) : (
        <p>상품 불러오기에 실패했습니다. 새로고침을 눌러주세요 😁</p>
      )}
    </section>
  );
};

export default SalesProducts;
