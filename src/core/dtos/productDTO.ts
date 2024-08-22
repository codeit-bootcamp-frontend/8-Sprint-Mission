export interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
  createdAt?: string;
  favoriteCount?: number;
  ownerId?: number;
  images?: string[];
  tags?: string[];
}

export interface ProductResponse {
  list: Product[];
  totalCount: number;
}
