export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string;
  favoriteCount: number;
  tags?: string[];
  createdAt: string;
}

export interface Products {
  className?: string;
  products: Product[];
}
