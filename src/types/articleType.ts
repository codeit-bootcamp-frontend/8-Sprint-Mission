export type Writer = {
  id: number;
  nickname: string;
};

export type ArticlesList = {
  id: number;
  title: string;
  content: string;
  image: string;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
  writer: Writer;
};

export type Articles = {
  list: ArticlesList[];
  totalCount: number;
};

export type ArticlesQuery = {
  page: number;
  pageSize: number;
  orderBy: string;
};
