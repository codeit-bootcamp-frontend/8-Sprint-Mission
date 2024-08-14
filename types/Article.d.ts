export type ArticleState = {
  title: string;
  content: string;
  image: Blob | MediaSource | null;
};

export type ArticleStateKey = keyof ArticleState;

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

export type PostArticleError = {
  message: string;
};

export type PostArticleResponse = PostArticleSuccess | PostArticleError;
