export interface ProductData {
  list: Products;
  totalCount: number;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  tags: string[];
  images: string[];
  ownerId: number;
  favoriteCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface ProductsQuery {
  pageSize: number;
  page: number;
  orderBy: "recent" | "favorite";
  keyword: string;
}

export interface GetProductsContext {
  queries: Partial<ProductsQuery>;
  signal?: AbortSignal;
}

export type Products = Product[];
export type ProductsQueryKey = [string, ProductsQuery];
