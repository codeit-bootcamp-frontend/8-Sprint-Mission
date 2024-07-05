export interface ProductResponse {
  totalCount: number;
  list: ProductItem[];
}

export interface ProductItem {
  createdAt: string;
  favoriteCount: number;
  ownerId: number;
  images: string;
  tags: string;
  price: number;
  description: string;
  name: string;
  id: number;
}

export interface QueryOptions {
  currentPage?: number;
  pageSize?: number;
  orderBy?: string;
  searchKeyword?: string;
}

export interface ProductDetailParams {
  productId: number;
}

export interface ProductDetailData {
  id: number;
  name: string;
  description: string;
  price: number;
  tags: string[];
  images: string[];
  ownerId: number;
  favoriteCount: number;
  createAt: string;
  updateAt: string;
  isFavorite: boolean;
}
