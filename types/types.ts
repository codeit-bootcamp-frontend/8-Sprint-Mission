export interface Writer {
  id: number;
  nickname: string;
}

export interface Article {
  id: number;
  title: string;
  content: string;
  image: string;
  likeCount: number;
  createdAt: Date;
  updatedAt: Date;
  writer: Writer;
}

export interface ArticlesResponse {
  list: Article[];
  totalCount: number;
}
