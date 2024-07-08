export interface IProduct {
  createdAt: string;
  favoriteCount: number;
  ownerId: number;
  images: string[];
  tags: string[];
  price: number;
  description: string;
  name: string;
  id: number;
}

export interface IProductResponse {
  totalCount: number;
  list: IProduct[];
}

export type ProductOrderByType = 'recent' | 'favorite';
