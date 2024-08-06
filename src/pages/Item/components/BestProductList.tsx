import React from "react";
import ProductCard from "../../../components/ui/ProductCard";
import { Link } from "react-router-dom";
import Loadingbar from "../../../components/ui/Loadingbar";
import useProducts from "../../../hooks/useProductList";

const getPageSize = () => {
  const width = window.innerWidth;
  switch (true) {
    case width < 768:
      return 1;
    case width < 1200:
      return 2;
    default:
      return 4;
  }
};

function BestProductList() {
  const { products, loading } = useProducts("favorite", getPageSize);

  const ProductList =
    products.length > 0 ? (
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/items/${product.id}`}>
              <ProductCard product={product} />
            </Link>
          </li>
        ))}
      </ul>
    ) : (
      <p className="list-none">상품이 없습니다.</p>
    );

  return (
    <>
      <div className="section-header">
        <h3 className="title">베스트 상품</h3>
      </div>
      {loading ? <Loadingbar /> : ProductList}
    </>
  );
}

export default BestProductList;
