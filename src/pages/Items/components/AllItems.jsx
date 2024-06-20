import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemContainer from "./Item";

function AllItems() {
  const [items, setItems] = useState([]);

  return (
    <section className="all-items-container">
      <div className="all-items-header">
        <h1 className="section-title">판매 중인 상품</h1>
        <div className="menu-wrap">
          <div className="search"></div>
          <Link to="/AddItem" className="login-btn">
            상품 등록하기
          </Link>
          <div className="range-items">최신순</div>
        </div>
      </div>
      <div className="all-items-list"></div>
      {items.map((item) => (
        <ItemContainer item={item} />
      ))}
    </section>
  );
}

export default AllItems;
