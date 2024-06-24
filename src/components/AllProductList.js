import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import { getProducts } from '../services/api';

const getPageSize = () => {
  const width = window.innerWidth;
  switch (true) {
    case width < 768: // Mobile viewport
      return 4;
    case width < 1200: // Tablet viewport
      return 6;
    default: // Desktop viewport
      return 10;
  }
};

function AllProductList() {
  const [orderBy, setOrderBy] = useState('recent');
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(getPageSize());
  const [totalPageNum, setTotalPageNum] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  const handleNewestClick = () => {
    setMenuOpen(false);
    setOrderBy('recent');
  };

  const handleFavoriteCountClick = () => {
    setMenuOpen(false);
    setOrderBy('favorite');
  };

  const handleLoad = async ({ orderBy, page, pageSize }) => {
    try {
      const products = await getProducts({ orderBy, page, pageSize });
      setProducts(products.list);
      setTotalPageNum(Math.ceil(products.totalCount / pageSize));
    } catch (error) {
      console.error('Failed to load products:', error);
      setProducts([]);
    }
  };

  const onPageChange = pageNumber => {
    if (!pageNumber || pageNumber > totalPageNum) return;
    console.log(pageNumber);
    setPage(pageNumber);
  };

  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
    };
    window.addEventListener('resize', handleResize);

    // Initial load
    handleLoad({ orderBy, page, pageSize });

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [orderBy, page, pageSize]);

  return (
    <>
      <div className="section-header">
        <h3 className="title">판매 중인 상품</h3>
        <input type="text" className="search" placeholder="검색할 상품을 입력해주세요"></input>
        <a href="./additem.html" className="btn-primary btn-sm btn-add" type="button">
          상품 등록하기
        </a>
        <div className="dropdown">
          <button onClick={toggleMenu} className="dropdown-toggle" type="button">
            <span>{orderBy === 'recent' ? '최신순' : '좋아요순'}</span>
          </button>
          <ul className={`dropdown-menu ${menuOpen ? 'open' : ''}`}>
            <li>
              <button onClick={handleNewestClick} className="dropdown-item">
                최신순
              </button>
            </li>
            <li>
              <button onClick={handleFavoriteCountClick} className="dropdown-item">
                좋아요순
              </button>
            </li>
          </ul>
        </div>
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
      {totalPageNum > 1 && <Pagination totalPageNum={totalPageNum} activePageNum={page} onPageChange={onPageChange} />}
    </>
  );
}

export default AllProductList;
