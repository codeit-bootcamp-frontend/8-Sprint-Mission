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

export interface CreateProductRequest {
  images: Product['images'];
  tags: Product['tags'];
  price: Product['price'];
  description: Product['description'];
  name: Product['name'];
}

export interface CreateProductResponse extends Omit<Product, 'updatedAt'> {
  ownerNickname: string;
}
