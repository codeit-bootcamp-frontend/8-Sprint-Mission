import { useState } from "react";
import "./AllProductList.css";
import ProductListItem from "./ProductListItem";

function AllProductList({ items }) {
  // const [order, setOrder] = useState("createdAt");
  // const sortedItems = items.sort((a, b) => b[order] - a[order]);
  // const handleNewestClick = () => setOrder("createdAt");
  // const handleLikeClick = () => setOrder("rating");

  return (
    <div className="all-product-list">
      <div className="label">
        <div className="label-title">전체 상품</div>
        <div className="label-inputs">
          <input
            className="search-input"
            type="text"
            placeholder="검색할 상품을 입력해주세요"
          ></input>
          <button className="product-add-button">상품 등록하기</button>
          <select className="order-dropdown" name="order" id="order">
            <option value="createAt" selected>
              최신순
            </option>
            <option value="rating">좋아요순</option>
          </select>
        </div>
      </div>
      <ul className="items">
        {/* items -> sortedItems로 바꾸기 */}
        {items.map((item) => {
          return (
            <li key={items.id}>
              <ProductListItem item={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AllProductList;
