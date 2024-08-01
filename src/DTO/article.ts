export interface Writer {
  id: number;
  nickname: string;
}

export interface Article {
  id: number;
  images?: string;
  count: string;
  title: string;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
  writer: Writer;
}

export interface ArticlesResponse {
  list: Article[];
  totalCount: number;
}
