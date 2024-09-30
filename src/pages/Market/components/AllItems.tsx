import { getProducts } from "../../../lib/api";
import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import searchIcon from "../../../assets/ic_search.svg";
import Dropdown from "../../../components/UI/Dropdown";
import "./AllItems.css";
import "../../../style/global.css";
import { Link } from "react-router-dom";
import PaginationBar from "../../../components/UI/PaginationBar";
import { Product } from "../../../type/ProductType";
import { useQuery } from "@tanstack/react-query";

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
  const [orderBy, setOrderBy] = useState<string>("recent");
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(getPageSize());

  const options = [
    { label: "최신순", value: "recent" },
    { label: "좋아요순", value: "favorite" },
  ];

  const { data } = useQuery<{
    list: Product[];
    totalCount: number;
  }>({
    queryKey: ["allProducts", { page, pageSize, orderBy }],
    queryFn: () => getProducts({ page, pageSize, orderBy }),
  });
  console.log(data);
  const products = data?.list || [];
  const totalCount = data?.totalCount ?? 0;

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

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
        {products.map((product: Product) => (
          <ItemList product={product} key={product.id} />
        ))}
      </div>
      <div className="paginationBarWrapper">
        <PaginationBar
          totalPageNum={totalCount ?? 1}
          activePageNum={page}
          onPageChange={onPageChange}
        />
      </div>
    </>
  );
}
export default AllItems;
