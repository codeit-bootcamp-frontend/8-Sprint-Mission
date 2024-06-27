import "../styles/components/SalesProductsList.css";

import searchImg from "../assets/ic_search.png";

import { Link } from "react-router-dom";

import ProductCard from "./ProductCard";

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
    const options = event.currentTarget.children[1];
    if (options.style.display === "none") {
      options.style.display = "flex";
    } else {
      options.style.display = "none";
    }
  };

  return (
    <section className="sales-products-section">
      <div className="sales-products-header">
        <h2 className="sales-products-title">판매 중인 상품</h2>
        <div className="sales-products-menu-group pc">
          <input className="sales-search-bar" type="search" />
          <Link to="/additem">
            <button className="register-item-button">상품 등록하기</button>
          </Link>
          <div
            onClick={handleSelctOptionsDisplay}
            className="product-order-select-box"
          >
            <div className="product-selected-value">{orderDict[order]}</div>
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
        <div className="sales-products-menu-group mobile"></div>
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
