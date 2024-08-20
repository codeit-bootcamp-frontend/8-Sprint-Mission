import { UserInfo } from '../auth';

export interface Comment {
  id: number;
  content: string;
  writer: Pick<UserInfo, 'id' | 'nickname' | 'image'>;
  updatedAt: string;
  createdAt: string;
}

export interface GetArticleCommentsQuery {
  articleId: number | string;
  limit: number;
  cursor?: number;
}

export interface ArticleCommentsResponse {
  nextCursor: number | null;
  list: Comment[];
}

export interface CreateArticleCommentsData {
  articleId: number | string;
  content: string;
}
