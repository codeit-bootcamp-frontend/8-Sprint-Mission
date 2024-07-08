import React, { useEffect, useState } from "react";
import "./SalesProducts.css";
import { getProducts } from "../../../../api/api";
import Product from "../Product/Product";
import Pagination from "../../../../components/Pagination/Pagination";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaSortAmountDown } from "react-icons/fa";
const getHtmlSize = () => {
  const width = window.innerWidth;
  if (width < 768) {
    return 4;
  } else if (width < 1200) {
    return 6;
  } else {
    return 10;
  }
};

function SalesProducts() {
  const [products, setProducts] = useState([]);
  const [isSelectVisibleList, setIsSelectVisibleList] = useState(false);
  const [orderBy, setOrderBy] = useState("recent");
  const [pageSize, setPageSize] = useState(getHtmlSize());
  const [page, setPage] = useState(1);
  const [totalPageNum, setTotalPageNum] = useState();

  const fetchSalesProducts = async (pageSize, orderBy, page) => {
    const productsData = await getProducts(pageSize, orderBy, page);
    setProducts(productsData.list);
    setTotalPageNum(Math.ceil(productsData.totalCount / pageSize));
  };

  useEffect(() => {
    fetchSalesProducts(pageSize, orderBy, page);
    const handleResizeScreen = () => setPageSize(getHtmlSize());
    window.addEventListener("resize", handleResizeScreen);

    return () => {
      window.removeEventListener("resize", handleResizeScreen);
    };
  }, [orderBy, pageSize, page]);

  const sortSelectListVisibleToggle = () => {
    setIsSelectVisibleList(!isSelectVisibleList);
  };
  const onClickSortSelect = (e) => {
    const selectedValue = e.target.innerText;
    selectedValue === "최신순" ? setOrderBy("recent") : setOrderBy("favorite");
    setIsSelectVisibleList(false);
  };
  const onPageChange = (pageNumber) => {
    setPage(pageNumber);
  };
  return (
    <div className="salesProducts-container">
      <div className="salesProducts-header">
        <h1 className="salesProducts-title">판매 중인 상품</h1>
        <div className="salesProducts-header-right-box">
          <div className="salesProducts-input-box">
            <CiSearch />
            <input
              type="text"
              className="salesProducts-input"
              placeholder="검색할 상품을 입력해주세요"
            />
          </div>
          <Link to="addProduct" className="Product-registration-button">
            상품 등록하기
          </Link>
          <div className="salesProducts-sort-select-container">
            {getHtmlSize() !== 4 ? (
              <div
                className="salesProducts-sort-select-box"
                onClick={sortSelectListVisibleToggle}
              >
                {orderBy === "favorite" ? "좋아요순" : "최신순"}
                <IoMdArrowDropdown className="salesProducts-sort-select-icon" />
              </div>
            ) : (
              <div
                className="salesProducts-sort-select-box"
                onClick={sortSelectListVisibleToggle}
              >
                <FaSortAmountDown />
              </div>
            )}
            {isSelectVisibleList && (
              <div className="salesProducts-sort-select-list">
                <div onClick={onClickSortSelect}>최신순</div>
                <div onClick={onClickSortSelect}>좋아요순</div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="salesProducts-box">
        {products.map((product, idx) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
      <div className="paginationBarWrapper">
        <Pagination
          totalPageNum={totalPageNum}
          activePageNum={page}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
}

export default SalesProducts;
