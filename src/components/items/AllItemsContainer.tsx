import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ItemContainer from "./ItemContainer";
import DropDownList from "./DropDownList";
import Pagination from "./Pagination";
import { getProducts } from "../../core/api";
import useFetch from "../../lib/hooks/useFetch";
import countPageItems from "../../lib/utils/countPageItems";
import { ProductResponse } from "../../DTO/product";

function AllItemsContainer() {
  const [page, setPage] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>("최신순");
  const [pageSize, setPageSize] = useState<number>(countPageItems(4, 6, 10));

  const { data } = useFetch<ProductResponse>(
    getProducts,
    {
      page,
      pageSize,
      orderBy: selectedCategory === "최신순" ? "recent" : "favorite",
    },
    { list: [], totalCount: 0 }
  );

  const { list = [], totalCount = 0 } = data || {};

  const totalPages = Math.ceil(totalCount / pageSize);

  const handleResize = () => {
    const newPageSize = countPageItems(4, 6, 10);
    if (newPageSize !== pageSize) {
      setPageSize(newPageSize);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [pageSize]);

  return (
    <>
      <section className="all-items-container">
        <div className="all-items-header">
          <h1 className="section-title">판매 중인 상품</h1>
          <div className="ic-search" />
          <input className="search" placeholder="검색할 상품을 입력해주세요" />
          <Link to="/AddItem" className="login-btn">
            상품 등록하기
          </Link>
          <DropDownList
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
        <div className="all-items-list">
          {list.map((item) => (
            <ItemContainer key={item.id} item={item} />
          ))}
        </div>
      </section>
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </>
  );
}

export default AllItemsContainer;
