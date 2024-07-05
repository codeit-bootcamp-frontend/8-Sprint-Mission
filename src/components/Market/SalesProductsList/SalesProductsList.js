import "./SalesProductsList.css";

import { Link } from "react-router-dom";

import ProductCard from "../ProductCard/ProductCard";

const orderDict = {
  recent: "최신순",
  favorite: "좋아요순",
};

function SalesProductsList({ salesProducts, order, onChangeOrder }) {
  const handleSalesProductsOrder = (event) => {
    const order = event.target.dataset.value;
    onChangeOrder(order);
  };

  const handleSelctOptionsDisplay = (event) => {
    const options = event.currentTarget.lastChild;
    options.style.display === "none"
      ? (options.style.display = "flex")
      : (options.style.display = "none");
  };

  return (
    <section className="sales-products-section">
      <div className="sales-products-header">
        <h2 className="sales-products-title">판매 중인 상품</h2>
        <div className="sales-products-menu-group">
          <input
            className="sales-search-bar"
            type="search"
            placeholder="검색할 상품을 입력해주세요"
          />
          <Link to="/additem">
            <button className="register-item-button">상품 등록하기</button>
          </Link>
          <div
            onClick={handleSelctOptionsDisplay}
            className="product-order-select-box"
          >
            <div className="product-selected-order-value">
              {orderDict[order]}
            </div>
            <div className="product-order-select-options">
              <div data-value="recent" onClick={handleSalesProductsOrder}>
                최신순
              </div>
              <div data-value="favorite" onClick={handleSalesProductsOrder}>
                좋아요순
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sales-products-header mobile">
        <h2 className="sales-products-title">판매 중인 상품</h2>
        <Link to="/additem">
          <button className="register-item-button">상품 등록하기</button>
        </Link>
        <input
          className="sales-search-bar"
          type="search"
          placeholder="검색할 상품을 입력해주세요"
        />
        <div
          className="product-selected-order-value-minimize"
          onClick={handleSelctOptionsDisplay}
        >
          <div className="product-order-select-options">
            <div data-value="recent" onClick={handleSalesProductsOrder}>
              최신순
            </div>
            <div data-value="favorite" onClick={handleSalesProductsOrder}>
              좋아요순
            </div>
          </div>
        </div>
      </div>

      <ol className="sales-products-grid">
        {salesProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ol>
    </section>
  );
}

export default SalesProductsList;
