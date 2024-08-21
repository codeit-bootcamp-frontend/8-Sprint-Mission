export type Writer = {
  id: number;
  nickname: string;
};

export type ArticlesList = {
  id: number;
  title: string;
  content: string;
  image?: string | null;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
  writer: Writer;
};

export type ArticlesAdd = Pick<ArticlesList, "title" | "content" | "image">;

export type Articles = {
  list: ArticlesList[];
  totalCount: number;
};

export type ArticlesDetail = ArticlesList & {
  isLiked: boolean;
};

export type ArticlesQuery = {
  page: number;
  pageSize: number;
  orderBy: string;
  keyword?: string;
};

export type ArticlesDetailQuery = {
  articleId: number;
};
