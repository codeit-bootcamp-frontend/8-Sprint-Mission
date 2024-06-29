import { getProducts } from "../api.js";
import React, { useEffect, useState } from "react";
import ItemList from "./ItemList.js";
import searchIcon from "../assets/ic_search.svg";
import Dropdown from "./Dropdown.js";
import "./AllItems.css";
import "./global.css";
import { Link } from "react-router-dom";
import PaginationBar from "./PaginationBar.js";

const getPageSize = () => {
  const width = window.innerWidth;
  if (width < 768) {
    return 4;
  }
  if (width < 1280) {
    return 6;
  }
  return 10;
};

function AllItems() {
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState("createdAt");
  const [page, setPage] = useState(1);
  const [totalPageNum, setTotalPageNum] = useState();
  const [pageSize, setPageSize] = useState(getPageSize());

  const options = [
    { label: "최신순", value: "createdAt" },
    { label: "좋아요순", value: "favoriteCount" },
  ];

  const sortedItems = (products, order) => {
    return [...products].sort((a, b) => {
      if (order === "createdAt") {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
      return b.favoriteCount - a.favoriteCount;
    });
  };

  const handleChange = (value) => {
    setOrder(value);
  };

  const handleLoad = async ({ order, page, pageSize }) => {
    try {
      const products = await getProducts({ order, page, pageSize });
      setProducts(products.list);
      setTotalPageNum(Math.ceil(products.totalCount / pageSize));
    } catch (error) {
      console.error("상품 목록을 가져오는 중 오류 발생:", error);
    }
  };

  const style = {
    textDecoration: "none",
    color: "#FFFFFF",
  };

  const onPageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
    };
    window.addEventListener("resize", handleResize);
    handleLoad({ order, page, pageSize });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [order, page, pageSize]);

  return (
    <>
      <div className="allItemsBar">
        <div className="title">판매 중인 상품</div>
        <div className="searchItem">
          <img className="searchIcon" src={searchIcon} alt="searchIcon" />
          <input
            id="searchText"
            name="searchText"
            placeholder="검색할 상품을 입력해주세요"
          />
        </div>
        <button className="itemRegisteration">
          <Link style={style} to="/additem">
            상품 등록하기
          </Link>
        </button>
        <div className="dropdown">
          <Dropdown
            options={options}
            selectedValue={order}
            onSelect={handleChange}
          />
        </div>
      </div>
      <div
        className="
    allItemsMenu"
      >
        {sortedItems(products, order).map((product) => (
          <ItemList product={product} key={product.id} />
        ))}
      </div>
      <div className="paginationBarWrapper">
        <PaginationBar
          totalPageNum={totalPageNum}
          activePageNum={page}
          onPageChange={onPageChange}
        />
      </div>
    </>
  );
}
export default AllItems;
