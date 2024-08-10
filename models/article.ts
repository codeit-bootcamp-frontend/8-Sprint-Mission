export interface Writer {
  nickname: string;
  id: number;
}

export interface Article {
  updatedAt: string;
  createdAt: string;
  likeCount: number;
  writer: Writer;
  image: string;
  content: string;
  title: string;
  id: number;
}

export interface ArticleResponse {
  totalCount: number;
  list: Article[];
}

export interface ArticleQuery {
  page: number;
  pageSize: number;
  orderBy: "like" | "recent";
  keyword: string | null;
}
