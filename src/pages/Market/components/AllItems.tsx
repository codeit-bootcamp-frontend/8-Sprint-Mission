import { getProducts } from "../../../lib/api";
import React, { useEffect, useState, useCallback } from "react";
import ItemList from "./ItemList";
import searchIcon from "../../../assets/ic_search.svg";
import Dropdown from "../../../components/UI/Dropdown";
import "./AllItems.css";
import "../../../style/global.css";
import { Link } from "react-router-dom";
import PaginationBar from "../../../components/UI/PaginationBar";
import { Product } from "../../../type/ProductType";

export interface HandleLoadProductsParams {
  orderBy: string;
  page: number;
  pageSize: number;
}

const getPageSize = () => {
  const width = window.innerWidth;

  switch (true) {
    case width < 768:
      return 4;

    case width < 1280:
      return 6;

    default:
      return 10;
  }
};

function AllItems() {
  const [products, setProducts] = useState<Product[]>([]);
  const [orderBy, setOrderBy] = useState<string>("recent");
  const [page, setPage] = useState<number>(1);
  const [totalPageNum, setTotalPageNum] = useState<number | undefined>(
    undefined
  );
  const [pageSize, setPageSize] = useState<number>(getPageSize());

  const options = [
    { label: "최신순", value: "recent" },
    { label: "좋아요순", value: "favorite" },
  ];

  const handleLoadProducts = useCallback(
    async ({ page, pageSize, orderBy }: HandleLoadProductsParams) => {
      try {
        const products = await getProducts({ page, pageSize, orderBy });
        setProducts(products.list);
        setTotalPageNum(Math.ceil(products.totalCount / pageSize));
      } catch (error) {
        console.error("상품 목록을 가져오는 중 오류 발생:", error);
      }
    },
    []
  );

  const handleChangeOrder = (selectedOption: {
    label: string;
    value: string;
  }) => {
    setOrderBy(selectedOption.value);
  };

  const style = {
    textDecoration: "none",
    color: "#FFFFFF",
  };

  const onPageChange = (pageNumber: number) => {
    setPage(pageNumber);
  };

  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
    };
    window.addEventListener("resize", handleResize);
    handleLoadProducts({ page, pageSize, orderBy });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [orderBy, page, pageSize, handleLoadProducts]);

  return (
    <>
      <div className="allItemsBar">
        <div className="all-items-title">판매 중인 상품</div>
        <div className="searchItem">
          <img className="searchIcon" src={searchIcon} alt="searchIcon" />
          <input
            id="searchText"
            name="searchText"
            placeholder="검색할 상품을 입력해주세요"
          />
        </div>
        <button className="itemRegistration">
          <Link style={style} to="/additem">
            상품 등록하기
          </Link>
        </button>
        <div className="dropdown">
          <Dropdown
            options={options}
            selectedValue={orderBy}
            onSelect={handleChangeOrder}
          />
        </div>
      </div>
      <div
        className="
    allItemsMenu"
      >
        {products.map((product) => (
          <ItemList product={product} key={product.id} />
        ))}
      </div>
      <div className="paginationBarWrapper">
        <PaginationBar
          totalPageNum={totalPageNum ?? 1}
          activePageNum={page}
          onPageChange={onPageChange}
        />
      </div>
    </>
  );
}
export default AllItems;
