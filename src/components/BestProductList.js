import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { getProducts } from '../services/api';

const getPageSize = () => {
  const width = window.innerWidth;
  switch (true) {
    case width < 768: // Mobile viewport
      return 1;
    case width < 1200: // Tablet viewport
      return 2;
    default: // Desktop viewport
      return 4;
  }
};

function BestProductList() {
  const orderBy = 'favorite';
  const [products, setProducts] = useState([]);
  const [pageSize, setPageSize] = useState(getPageSize());

  const handleLoad = async ({ orderBy, pageSize }) => {
    try {
      const products = await getProducts({ orderBy, pageSize });
      setProducts(products.list);
    } catch (error) {
      console.error('Failed to load products:', error);
      setProducts([]);
    }
  };

  useEffect(() => {
    handleLoad({ orderBy, pageSize });
    const handleResize = () => {
      setPageSize(getPageSize());
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [orderBy, pageSize]);

  return (
    <>
      <div className="section-header">
        <h3 className="title">베스트 상품</h3>
      </div>
      <ul className="product-list">
        {products.length > 0 ? (
          products.map(product => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))
        ) : (
          <p className="list-none">상품이 없습니다.</p>
        )}
      </ul>
    </>
  );
}

export default BestProductList;
