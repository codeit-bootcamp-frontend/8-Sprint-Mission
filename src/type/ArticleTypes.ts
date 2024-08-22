import { BasicType } from './BasicTypes';

export type Article = Pick<
  BasicType,
  | 'updatedAt'
  | 'createdAt'
  | 'writer'
  | 'title'
  | 'content'
  | 'image'
  | 'likeCount'
  | 'id'
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

export type ArticleDetailResponse = Article & Pick<BasicType, 'isLiked'>;

export type ArticleDetailRequest = Pick<BasicType, 'articleId'>;

export type AddArticleCommentRequest = Pick<BasicType, 'content' | 'articleId'>;

export type ArticleComment = Pick<
  BasicType,
  'writer' | 'updatedAt' | 'createdAt' | 'content' | 'id'
>;
