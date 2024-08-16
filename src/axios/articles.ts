import axiosInstance from "./instance";

interface Writer {
  id: number;
  nickname: string;
}

export interface Article {
  id: number;
  title: string;
  content: string;
  image: string;
  likeCount: number;
  writer: Writer;
  createdAt: string;
  updatedAt: string;
}

export type OrderOption = "like" | "recent";

interface GetArticlesProps {
  page?: number;
  pageSize: number;
  orderBy?: OrderOption;
  keyword?: string;
}

interface ArticlesResponse {
  list: Article[];
  totalCount: number;
}

export async function getArticles({
  page = 1,
  pageSize,
  orderBy = "recent",
  keyword = "",
}: GetArticlesProps) {
  let query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;
  if (keyword) {
    query += `&keyword=${keyword}`;
  }

  try {
    const res = await axiosInstance.get(`/articles?${query}`);
    const { list, totalCount }: ArticlesResponse = res.data;
    return { list, totalCount };
  } catch (error) {
    return { list: [], totalCount: 0 };
  }
}

interface GetArticleByIDProps {
  articleId: number;
}

export async function getArticleByID({ articleId }: GetArticleByIDProps) {
  try {
    const res = await axiosInstance.get(`/articles/${articleId}`);
    const article: Article = res.data;
    return article;
  } catch (error) {
    return null;
  }
}

interface PostArticleProps {
  image: string | null;
  content: string;
  title: string;
}

export async function postArticle({ image, content, title }: PostArticleProps) {
  try {
    const res = await axiosInstance.post("/articles", { image, content, title });
    const postedArticle: Article = res.data;
    return postedArticle;
  } catch (error) {
    console.log(error);
  }
}
