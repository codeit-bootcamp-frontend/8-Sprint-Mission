import "./BestProductsList.css";

import ProductCard from "../ProductCard/ProductCard";

function BestProductsList({ bestProducts }) {
  return (
    <section className="best-products-section">
      <h2 className="best-products-title">베스트 상품</h2>
      <ol className="best-products-grid">
        {bestProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ol>
    </section>
  );
}

export default BestProductsList;
