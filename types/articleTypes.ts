// types/article.ts
export interface Article {
  id: number;
  title: string;
  image?: string;
  writer: { nickname: string; id: number };
  updatedAt: Date;
  createdAt: Date;
  likeCount: number;
  content?: string;
}

export interface ArticleListResponse {
  totalCount: number;
  list: Article[];
}

export type ArticleSortOption = "recent" | "like";
