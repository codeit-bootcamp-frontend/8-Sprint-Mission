export interface ProductTypes {
  createdAt: string;
  favoriteCount: number;
  ownerNickname: string;
  ownerId: number;
  images: string;
  tags: string[];
  price: number;
  description: string;
  name: string;
  id: number;
  isFavorite: boolean;
}

export interface ProductListTypes {
  className?: string;
  products: ProductTypes[];
}
