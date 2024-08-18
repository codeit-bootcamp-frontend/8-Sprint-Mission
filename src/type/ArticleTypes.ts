import { OptionalPick } from '../lib/utils/OptionalPick';
import { BasicType } from './BasicTypes';

export type Article = OptionalPick<
  BasicType,
  'id',
  | 'updatedAt'
  | 'createdAt'
  | 'writer'
  | 'title'
  | 'content'
  | 'image'
  | 'likeCount'
>;

export type ArticleListResponse = Pick<BasicType, 'totalCount'> & {
  list: Article[];
};

export type ArticleOrderBy = 'recent' | 'like';

export type ArticleListRequest = Pick<
  BasicType,
  'page' | 'pageSize' | 'keyword'
> & { orderBy: ArticleOrderBy };

export type AddArticleRequest = Pick<Article, 'image' | 'content' | 'title'>;
