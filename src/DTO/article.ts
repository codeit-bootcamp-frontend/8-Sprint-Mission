export interface Writer {
  id: number;
  nickname: string;
}

export interface Article {
  id: number;
  image?: string;
  count: string;
  content: string;
  title: string;
  likeCount: number;
  createdAt: string;
  updatedAt?: string;
  writer: Writer;
}

export interface ArticleResponse {
  list: Article[];
  totalCount: number;
}
