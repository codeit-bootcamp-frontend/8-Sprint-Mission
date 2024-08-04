interface IItem {
  id: string;
  name: string;
  price: number;
  images: string[];
  favoriteCount: number;
}

interface IAuthorInfo {
  image: string;
  nickname: string;
}

interface IComment {
  id: string;
  writer: IAuthorInfo;
  updatedAt: string;
  content: string;
}

interface IProduct {
  id: string;
  images: string[];
  name: string;
  price: number;
  description: string;
  tags: string[];
  isFavorite: boolean;
  favoriteCount: number;
}

export { IItem, IAuthorInfo, IComment, IProduct };
