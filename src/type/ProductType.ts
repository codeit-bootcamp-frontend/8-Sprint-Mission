export interface Product {
  id: number;
  name: string;
  createdAt: Date;
  favoriteCount: number;
  images: string[];
  price: number;
  description: string;
  tags: string[];
}
