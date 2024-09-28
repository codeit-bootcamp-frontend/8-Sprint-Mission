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

export interface ProductListResponse {
  list: Product[];
  totalCount: number;
}

export interface GetProductsProps {
  order: 'recent' | 'favorite';
  page: number;
  pageSize: number;
  keyword?: string;
}
