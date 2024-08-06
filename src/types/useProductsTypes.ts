// useProductsTypes.ts

import { Product, ProductListResponse } from "./productTypes";

export type OrderBy = "favorite" | "price" | "newest"; // 필수 조건에 맞게 정의

export interface UseProductsReturn {
  orderBy: OrderBy;
  setOrderBy: React.Dispatch<React.SetStateAction<OrderBy>>;
  products: Product[];
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  pageSize: number;
  totalPageNum: number;
  loading: boolean;
}
