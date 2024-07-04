import React, { useState, useEffect } from 'react';
import ProductCard from '../../../components/ui/ProductCard';
import { getProducts } from '../../../services/api';
import { Link } from 'react-router-dom';
import Loadingbar from '../../../components/ui/Loadingbar';

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
  const [loading, setLoading] = useState(false);

  const handleLoad = async ({ orderBy, pageSize }) => {
    setLoading(true);
    try {
      const products = await getProducts({ orderBy, pageSize });
      setProducts(products.list);
    } catch (error) {
      console.error('Failed to load products:', error);
      setProducts([]);
    } finally {
      setLoading(false);
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
  const ProductList =
    products.length > 0 ? (
      <ul className="product-list">
        {products.map(product => (
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
