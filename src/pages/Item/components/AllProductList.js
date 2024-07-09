import React from 'react';
import ProductCard from '../../../components/ui/ProductCard';
import Pagination from '../../../components/ui/Pagination';
import Loadingbar from '../../../components/ui/Loadingbar';
import Dropdown from '../../../components/ui/Dropdown';
import { Link, useNavigate } from 'react-router-dom';
import useProducts from '../../../hooks/useProductList';

const getPageSize = () => {
  const width = window.innerWidth;
  switch (true) {
    case width < 768:
      return 4;
    case width < 1200:
      return 6;
    default:
      return 10;
  }
};

const SORT_MENU_INFO = {
  RECENT: {
    label: '최신순',
    orderLabel: 'recent',
  },
  FAVORITE: {
    label: '좋아요순',
    orderLabel: 'favorite',
  },
};

function AllProductList() {
  const navigate = useNavigate();
  const { orderBy, setOrderBy, products, page, setPage, totalPageNum, loading } = useProducts('recent', getPageSize);

  const handleClickAddItemButton = () => {
    navigate('/additem');
  };

  const onPageChange = pageNumber => {
    if (!pageNumber || pageNumber > totalPageNum) return;
    setPage(pageNumber);
  };

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
        <h3 className="title">판매 중인 상품</h3>
        <input type="text" className="search" placeholder="검색할 상품을 입력해주세요"></input>
        <button onClick={handleClickAddItemButton} className="btn-primary btn-sm btn-add" type="button">
          상품 등록하기
        </button>
        <Dropdown
          options={Object.values(SORT_MENU_INFO)}
          selectedOption={SORT_MENU_INFO[orderBy.toUpperCase()]}
          onSelect={option => setOrderBy(option.orderLabel)}
        />
      </div>
      {loading ? <Loadingbar /> : ProductList}
      {totalPageNum > 1 && <Pagination totalPageNum={totalPageNum} activePageNum={page} onPageChange={onPageChange} />}
    </>
  );
}

export default AllProductList;
