import React, { useEffect, useState } from "react";
import "./SalesProducts.css";
import { getProducts } from "../../../../api/api";
import Product from "../Product/Product";
import Pagination from "../../../../components/Pagination/Pagination";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaSortAmountDown } from "react-icons/fa";

interface ProductType {
  id: string;
  name: string;
  price: number;
  favoriteCount: number;
  images: string[];
}

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
  const [totalPageNum, setTotalPageNum] = useState<number>();

  const fetchSalesProducts = async (
    pageSize: number,
    orderBy: string,
    page: number
  ) => {
    const productsData = await getProducts(pageSize, orderBy, page);
    setProducts(productsData.list);
    const totalPages: number = Math.ceil(productsData.totalCount / pageSize);
    setTotalPageNum(totalPages);
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
  const onClickSortSelect = (e: React.MouseEvent<HTMLDivElement>) => {
    const selectedValue = e.currentTarget.innerText;
    console.log(selectedValue);

    selectedValue === "최신순" ? setOrderBy("recent") : setOrderBy("favorite");
    setIsSelectVisibleList(false);
  };
  const onPageChange = (pageNumber: number): void => {
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
        {products.map((product: ProductType) => {
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
