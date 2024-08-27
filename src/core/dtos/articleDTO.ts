export interface Writer {
  id: number;
  nickname: string;
}

export interface ArticleId {
  id: number;
  image?: string;
  content: string;
  title: string;
  likeCount: number;
  createdAt: string;
  updatedAt?: string;
  writer: Writer;
}

export interface Article extends ArticleId {
  count: string;
}

export interface ArticleResponse {
  list: Article[];
  totalCount: number;
}
