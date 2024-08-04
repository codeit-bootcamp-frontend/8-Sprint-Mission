export type ProductApi = {
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

export type CommentType = {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  writer: {
    id: number;
    nickname: string;
    image: string;
  };
};

export type CommentsApi = {
  list: CommentType[];
  nextCursor: number;
};
