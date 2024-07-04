import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ItemContainer from "./ItemContainer";
import DropDownList from "./DropDownList";
import PageNation from "./PageNation";
import { getProducts } from "../../core/api";

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
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [selectedCategory, setSelectedCategory] = useState("최신순");

  // get data
  const fetchItemData = async ({ page, pageSize, orderBy }) => {
    try {
      const { list, totalCount } = await getProducts({
        page,
        pageSize,
        orderBy,
      });
      setItems(list);
      setTotalPages(Math.ceil(totalCount / pageSize));
    } catch (error) {
      console.error("데이터 가져오기 실패:", error);
      setItems([]);
    }
  };

  const handlePageSize = () => {
    setPageSize(countPageItems());
  };

  //change orderBy according to selectedCategory
  useEffect(() => {
    window.addEventListener("resize", handlePageSize);

    fetchItemData({
      page,
      pageSize,
      orderBy: selectedCategory === "최신순" ? "recent" : "favorite",
    });

    return () => {
      window.removeEventListener("resize", handlePageSize);
    };
  }, [page, pageSize, selectedCategory]);

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
          {items.map((item) => (
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
