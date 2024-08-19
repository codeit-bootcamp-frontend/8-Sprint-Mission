export type GetArticlesQuery = {
  page: number;
  pageSize: number;
  orderBy: 'like' | 'recent';
  keyword?: string;
};

export type Article = {
  updatedAt: string;
  createdAt: string;
  likeCount: number;
  writer: {
    nickname: string;
    id: number;
  };
  image: string;
  content: string;
  title: string;
  id: number;
};

export type GetArticlesResponse = {
  totalCount: number;
  list: Article[];
};

export type ArticleForm = {
  title: string;
  content: string;
  image: Blob | MediaSource | null;
};

export type ArticleFormKey = keyof ArticleForm;

export type PostArticleSuccess = {
  updatedAt: string;
  createdAt: string;
  likeCount: number;
  writer: {
    nickname: string;
    id: number;
  };
  image: string;
  content: string;
  title: string;
  id: number;
};

export type ArticleError = {
  message: string;
};

export type PostArticleResponse = PostArticleSuccess | ArticleError;

export type ArticleCommentsQuery = {
  limit: number;
  cursor?: number;
};

export type ArticleComment = {
  writer: {
    image: string;
    nickname: string;
    id: number;
  };
  updatedAt: string;
  createdAt: string;
  content: string;
  id: number;
};

export type GetArticleCommentsSuccess = {
  nextCursor: number;
  list: ArticleComment[];
};

export type GetArticleCommentsResponse =
  | GetArticleCommentsSuccess
  | ArticleError;
