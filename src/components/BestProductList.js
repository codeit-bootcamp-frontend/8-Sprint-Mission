import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';   
import { getProducts } from '../services/api';

const getPageSize = () => {
  const width = window.innerWidth;
  if (width < 768) {
    // Mobile viewport
    return 1;
  } else if (width < 1200) {
    // Tablet viewport
    return 2;
  } else {
    // Desktop viewport
    return 4;
  }
};

function BestProductList() {
  const [orderBy, setOrderBy] = useState("favorite");
  const [items, setItems] = useState([]);
  const [pageSize, setPageSize] = useState(getPageSize()); 

  const handleLoad = async ({ orderBy, pageSize }) => {
    try {
      const products = await getProducts({ orderBy, pageSize });
      setItems(products.list);
    } catch (error) {
      console.error('Failed to load products:', error);
      setItems([]);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
    };
    window.addEventListener("resize", handleResize);

    handleLoad({ orderBy, pageSize });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [orderBy, pageSize]);

  return (
    <>
      <div className="section-header">
          <h3 className="title">베스트 상품</h3>
      </div>
      <ul className="product-list">
          {items.length > 0 ? (
            items.map((item) => (
              <li key={item.id}>
                <ProductCard item={item} />
              </li>
            ))
          ) : (
            <p className='list-none'>상품이 없습니다.</p>
          )}
        </ul>
    </>
  );
}

export default BestProductList;

