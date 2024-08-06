import React from "react";
import ProductCard from "../../../components/ui/ProductCard";
import Pagination from "../../../components/ui/Pagination";
import Loadingbar from "../../../components/ui/Loadingbar";
import Dropdown from "../../../components/ui/Dropdown";
import { Link, useNavigate } from "react-router-dom";
import useProducts from "../../../hooks/useProductList";
import { Product } from "../../../types/productTypes";

// 페이지 크기를 결정하는 함수
const getPageSize = (): number => {
  const width = window.innerWidth;
  return width < 1200 ? 5 : 10;
};

// 정렬 메뉴 정보 타입
interface SortMenuInfo {
  label: string;
  orderLabel: string;
}

const SORT_MENU_INFO: Record<string, SortMenuInfo> = {
  RECENT: {
    label: "최신순",
    orderLabel: "recent",
  },
  FAVORITE: {
    label: "좋아요순",
    orderLabel: "favorite",
  },
};

// useProducts 훅의 반환 타입
interface UseProductsReturn {
  orderBy: string;
  setOrderBy: (order: string) => void;
  products: Product[];
  page: number;
  setPage: (pageNumber: number) => void;
  totalPageNum: number;
  loading: boolean;
}

function AllProductList() {
  const navigate = useNavigate();
  const {
    orderBy,
    setOrderBy,
    products,
    page,
    setPage,
    totalPageNum,
    loading,
  } = useProducts("recent", getPageSize) as UseProductsReturn;

  // 상품 등록 버튼 클릭 핸들러
  const handleClickAddItemButton = () => {
    navigate("/additem");
  };

  // 페이지 변경 핸들러
  const onPageChange = (pageNumber: number | undefined) => {
    if (!pageNumber || pageNumber > totalPageNum) return;
    setPage(pageNumber);
  };

  // 제품 리스트 렌더링
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
        <h3 className="title">판매 중인 상품</h3>
        <input
          type="text"
          className="search"
          placeholder="검색할 상품을 입력해주세요"
        />
        <button
          onClick={handleClickAddItemButton}
          className="btn-primary btn-sm btn-add"
          type="button"
        >
          상품 등록하기
        </button>
        <Dropdown
          options={Object.values(SORT_MENU_INFO)}
          selectedOption={SORT_MENU_INFO[orderBy.toUpperCase()]}
          onSelect={(option) => setOrderBy(option.orderLabel)}
        />
      </div>
      {loading ? <Loadingbar /> : ProductList}
      {totalPageNum > 1 && (
        <Pagination
          totalPageNum={totalPageNum}
          activePageNum={page}
          onPageChange={onPageChange}
        />
      )}
    </>
  );
}

export default AllProductList;
