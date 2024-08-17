export type ArticlesCommentQuery = {
  articleId: number;
  limit: number;
  cursor?: number;
};

export type ArticlesCommentList = {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  writer: {
    id: number;
    nickname: string;
    image?: string | null;
  };
};

export type ArticlesComments = {
  list: ArticlesCommentList[];
  nextCursor?: number | null;
};
