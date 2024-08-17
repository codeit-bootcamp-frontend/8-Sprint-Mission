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
  keyword?: string;
}

export interface CommentWriter extends Writer {
  image: string;
}

export interface ArticleComment {
  writer: CommentWriter;
  updatedAt: string;
  createdAt: string;
  content: string;
  id: number;
}

export interface CommentResponse {
  nextCursor: number | null;
  list: ArticleComment[];
}

export interface GetCommentParam {
  articleId: number;
  limit: number;
  cursor: number | null;
}
