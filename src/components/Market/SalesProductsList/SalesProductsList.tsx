import React from "react";
import "./SalesProductsList.css";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

// Define the type for product
interface Product {
  id: number;
  images: string;
  name: string;
  price: number;
  favoriteCount: number;
}

// Define the type for props
interface SalesProductsListProps {
  salesProducts: Product[];
  order: "recent" | "favorite";
  onChangeOrder: (order: "recent" | "favorite") => void;
}

const orderDict: Record<SalesProductsListProps["order"], string> = {
  recent: "최신순",
  favorite: "좋아요순",
};

const SalesProductsList: React.FC<SalesProductsListProps> = ({
  salesProducts,
  order,
  onChangeOrder,
}) => {
  const handleSalesProductsOrder = (event: React.MouseEvent<HTMLDivElement>) => {
    const order = event.currentTarget.dataset.value as "recent" | "favorite";
    onChangeOrder(order);
  };

  const handleSelectOptionsDisplay = (event: React.MouseEvent<HTMLDivElement>) => {
    const options = event.currentTarget.querySelector(".product-order-select-options") as HTMLDivElement;
    if (options) {
      options.style.display = options.style.display === "none" ? "flex" : "none";
    }
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
            onClick={handleSelectOptionsDisplay}
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
          onClick={handleSelectOptionsDisplay}
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
