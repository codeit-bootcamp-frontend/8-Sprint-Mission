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
