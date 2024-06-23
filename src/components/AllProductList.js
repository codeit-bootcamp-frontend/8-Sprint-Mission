import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';   
import Pagination from './Pagination';   
import { getProducts } from '../services/api';
 
const getPageSize = () => {
  const width = window.innerWidth;
  if (width < 768) {
    // Mobile viewport
    return 4;
  } else if (width < 1200) {
    // Tablet viewport
    return 6;
  } else {
    // Desktop viewport
    return 10;
  }
};

function AllProductList() {
  const [orderBy, setOrderBy] = useState("recent");
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1); 
  const [pageSize, setPageSize] = useState(getPageSize()); 
  const [totalPageNum, setTotalPageNum] = useState(0);

  const [menuOpen, setMenuOpen] = useState(false);
  const [menuLabel, setMenuLabel] = useState('최신순');

  const toggleMenu = () => { setMenuOpen(prevState => !prevState) };

  const handleNewestClick = () => {
    setMenuLabel('최신순');
    setMenuOpen(false);
    setOrderBy('recent');
  };

  const handleFavoriteCountClick = () => {
    setMenuLabel('좋아요순');
    setMenuOpen(false);
    setOrderBy('favorite');
  };

  const handleLoad = async ({ orderBy, page, pageSize }) => {
    try {
      const products = await getProducts({ orderBy, page, pageSize });
      setItems(products.list);
      setTotalPageNum(Math.ceil(products.totalCount / pageSize));
    } catch (error) {
      console.error('Failed to load products:', error);
      setItems([]);
    }
  };

  const onPageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
    };
    window.addEventListener("resize", handleResize);

    // Initial load
    handleLoad({ orderBy, page, pageSize });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [orderBy, page, pageSize]);

  return (
    <>
      <div className="section-header">
        <h3 className="title">판매 중인 상품</h3>
        <input type="text" className="search" placeholder="검색할 상품을 입력해주세요"></input>
        <a href="./additem.html" className="btn-primary btn-sm btn-add" type="button">상품 등록하기</a>
        <div className="dropdown">
          <button onClick={toggleMenu} className="dropdown-toggle" type="button"><span>{menuLabel}</span></button>
          <ul className={`dropdown-menu ${menuOpen ? 'open' : ''}`}>
            <li><button onClick={handleNewestClick} className="dropdown-item">최신순</button></li>
            <li><button onClick={handleFavoriteCountClick} className="dropdown-item">좋아요순</button></li>
          </ul>
        </div>
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
      {totalPageNum > 1 && (
        <Pagination totalPageNum={totalPageNum} activePageNum={page} onPageChange={onPageChange} />
      )}
    </>
  );
}

export default AllProductList;
