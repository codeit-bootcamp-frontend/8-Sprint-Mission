import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ItemContainer from "./ItemContainer";
import DropDownList from "./DropDownList";
import { getItems } from "../../core/api";

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
  const [pageSize, setPageSize] = useState(10);
  const [selectedCategory, setSelectedCategory] = useState("최신순");

  // get api data
  const fetchItemData = async ({ page, pageSize, orderBy }) => {
    try {
      const item = await getItems({ page, pageSize, orderBy });
      setItems(item.list);
      console.log("데이터 가져오기 성공:", item);
    } catch (error) {
      console.error("데이터 가져오기 실패:", error);
      setItems([]);
    }
  };

  // get pageSize and change orderBy according to selectedCategory
  useEffect(() => {
    const measurePageSize = () => {
      setPageSize(countPageItems());
    };

    window.addEventListener("resize", measurePageSize);

    fetchItemData({
      page,
      pageSize,
      orderBy: selectedCategory === "최신순" ? "recent" : "favorite",
    });

    return () => {
      window.removeEventListener("resize", measurePageSize);
    };
  }, [page, pageSize, selectedCategory]);

  return (
    <section className="all-items-container">
      <div className="all-items-header">
        <h1 className="section-title">판매 중인 상품</h1>
        <div className="menu-wrap">
          <div className="ic-search"></div>
          <input className="search" placeholder="검색어를 입력하세요"></input>
          <Link to="/AddItem" className="login-btn">
            상품 등록하기
          </Link>
          <DropDownList
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
      </div>
      <div className="all-items-list">
        {items.map((item) => (
          <ItemContainer key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default AllItemsContainer;
