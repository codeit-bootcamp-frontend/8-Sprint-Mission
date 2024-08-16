import { UserInfo } from '../auth';

export interface Comment {
  id: number;
  content: string;
  writer: Pick<UserInfo, 'id' | 'nickname' | 'image'>;
  updatedAt: string;
  createdAt: string;
}

export interface GetArticleCommentsQuery {
  productId: number;
  limit: number;
  cursor?: number;
}

export interface ArticleCommentsResponse {
  nextCursor: number | null;
  list: Comment[];
}
