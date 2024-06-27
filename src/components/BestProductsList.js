import "../styles/components/BestProductsList.css";

import ProductCard from "./ProductCard";

function BestProductsList() {
  return (
    <section className="best-products-section">
      <h2 className="best-products-title">베스트 상품</h2>
      <ol className="best-products-grid">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ol>
    </section>
  );
}

export default BestProductsList;
