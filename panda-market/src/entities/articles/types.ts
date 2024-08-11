export type OrderByType = 'recent' | 'like';

export interface GetArticleRequest {
  page: number;
  pageSize: number;
  orderBy: OrderByType;
  keyword?: string;
}

interface Writer {
  nickname: string;
  id: number;
}

export interface Article {
  id: number;
  title: string;
  content: string;
  image: string;
  likeCount: number;
  writer: Writer;
  updatedAt: string;
  createdAt: string;
}

export interface ArticleResponse {
  list: Article[];
  totalCount: number;
}
