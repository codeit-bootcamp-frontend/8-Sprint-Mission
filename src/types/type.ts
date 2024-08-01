export type ProductsApi = {
  createdAt: "2024-08-01T06:36:24.384Z";
  favoriteCount: 0;
  ownerId: 1;
  images: ["https://example.com/..."];
  tags: ["전자제품"];
  price: 0;
  description: "string";
  name: "상품 이름";
  id: 1;
  isFavorite: true;
};

export type ItemType = {
  imageFile: Blob | MediaSource | null;
  title: string;
  content: string;
  price: string;
  tag: string;
};

export type Item = {
  createdAt: string;
  favoriteCount: number;
  ownerId: number;
  images: string[];
  tags: string[];
  price: number;
  description: string;
  name: string;
  id: number;
};

export type ItemsApi = {
  totalCount: number;
  list: Item[];
};

export type ItemKeyType = keyof ItemType;
