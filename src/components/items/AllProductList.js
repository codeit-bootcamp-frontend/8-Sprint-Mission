import { useState } from "react";
import "./AllProductList.css";
import ProductListItem from "./ProductListItem";

function AllProductList({ products }) {
  // const [order, setOrder] = useState("createdAt");
  // const sortedProducts = products.sort((a, b) => b[order] - a[order]);
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
          <button
            className="product-add-button"
            onClick="location.href='/additem'"
          >
            상품 등록하기
          </button>
          <select className="order-dropdown" name="order" id="order">
            <option value="createAt" selected>
              최신순
            </option>
            <option value="rating">좋아요순</option>
          </select>
        </div>
      </div>

      <ul className="products">
        {/* products -> sortedProducts로 바꾸기 */}
        {products.map((product) => {
          return (
            <li key={product.id}>
              <ProductListItem item={product} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AllProductList;
