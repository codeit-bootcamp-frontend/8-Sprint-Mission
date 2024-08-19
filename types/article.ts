type Article = {
  updatedAt: Date;
  createdAt: Date;
  likeCount: number;
  writer: { nickname: string; id: number };
  image: string;
  content: string;
  title: string;
  id: number;
};

type ArticleListResponse = {
  totalCount: number;
  list: Article[];
};

type ArticleSortOption = 'recent' | 'like';

type Comments = {
  writer: {
    image: string;
    nickname: string;
    id: number;
  };
  updatedAt: Date;
  createdAt: Date;
  content: string;
  id: number;
};

type CommentListResponse = {
  nextCursor: number;
  list: Comments[];
};

type Product = {
  createdAt: Date;
  favoriteCount: number;
  ownerId: number;
  images: string[];
  tags: string[];
  price: number;
  description: string;
  name: string;
  id: number;
  isFavorite: boolean;
};

type ProductListResponse = {
  totalCount: number;
  list: Product[];
};

type ProductSortOption = 'recent' | 'favorite';

type ProductListFetcherParams = {
  orderBy: ProductSortOption;
  pageSize: number;
  page?: number;
};
