import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ItemContainer from "./ItemContainer";
import DropDownList from "./DropDownList";
import PageNation from "./PageNation";
import { getProducts } from "../../core/api";
import useFetch from "../../lib/hooks/useFetch";

// count items according to pageSize
const countPageItems = () => {
  if (window.innerWidth < 768) {
    return 4;
  } else if (window.innerWidth < 1200) {
    return 6;
  } else {
    return 10;
  }
};

function AllItemsContainer() {
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("최신순");
  const [pageSize, setPageSize] = useState(countPageItems());

  const handleResize = () => {
    const newPageSize = countPageItems();
    if (newPageSize !== pageSize) {
      setPageSize(newPageSize);
    }
  };

  const { data: { list = [], totalCount = 0 } = {} } = useFetch(
    getProducts,
    {
      page,
      pageSize,
      orderBy: selectedCategory === "최신순" ? "recent" : "favorite",
    },
    { list: [], totalCount: 0 }
  );

  const totalPages = Math.ceil(totalCount / pageSize);

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
      <PageNation
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </>
  );
}

export default AllItemsContainer;
