import React from 'react';
import "./BestProductsList.css";
import ProductCard from "../ProductCard/ProductCard";

interface Product {
  id: number;
  images: string;
  name: string;
  price: number;
  favoriteCount: number;
}

interface BestProductsListProps {
  bestProducts: Product[];
}

const BestProductsList: React.FC<BestProductsListProps> = ({ bestProducts }) => {
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
