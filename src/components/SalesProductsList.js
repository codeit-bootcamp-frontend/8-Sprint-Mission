import "../styles/components/SalesProductsList.css";

import ProductCard from "./ProductCard";

function SalesProductsList() {
  return (
    <section className="sales-products-section">
      <h2 className="sales-products-title">베스트 상품</h2>
      <ol className="sales-products-grid">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ol>
    </section>
  );
}

export default SalesProductsList;
