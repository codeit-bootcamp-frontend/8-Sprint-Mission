// productTypes.ts

// 기존 Product 타입
export interface Product {
  id: string;
  images: string[];
  name: string;
  price: number;
  description: string;
  tags: string[];
  favoriteCount: number;
}

// 기존 UseProductIdReturn 타입
export interface UseProductIdReturn {
  product: Product | null;
  isLoading: boolean;
  error: Error | null;
}

// 기존 ProductListResponse 타입
export interface ProductListResponse {
  list: Product[];
  totalCount: number;
}

export interface UseProductsReturn {
  orderBy: string; // 현재 정렬 기준
  setOrderBy: (orderBy: string) => void; // 정렬 기준을 설정하는 함수
  products: Product[]; // 현재 페이지의 제품 목록
  page: number; // 현재 페이지 번호
  setPage: (page: number) => void; // 페이지 번호를 설정하는 함수
  pageSize: number; // 페이지 사이즈
  totalPageNum: number; // 전체 페이지 수
  loading: boolean; // 데이터 로딩 상태
}
