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
  createdAt: Date;
  updatedAt: Date;
  writer: CommentWriter;
}

export interface CommentWriter extends Writer {
  image: string;
}

export interface AddArticle {
  title: string;
  content: string;
  image: File | null;
}

export interface LoginUserRequest {
  email: string;
  password: string;
}

export interface AddUserRequest extends LoginUserRequest {
  nickname: string;
  passwordConfirmation: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export interface User {
  id: number;
  email: string;
  image: null;
  nickname: string;
  updatedAt: string;
  createdAt: string;
}
