export interface GetArticles {
  page: number;
  pageSize: number;
  orderBy?: "recent" | "like";
  keyword?: string;
}

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

export interface CommentsResponse {
  list: Comment[];
  nextCursor: null;
}

export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  writer: CommentWriter;
}

export interface CommentWriter {
  id: number;
  nickname: string;
  image: string;
}

export interface AddArticle {
  title: string;
  content: string;
  image: File | null;
}
