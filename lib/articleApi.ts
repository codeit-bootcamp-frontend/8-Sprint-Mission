import { ArticlesResponse, GetArticles } from "@/types/types";
import axios from "@/lib/axios";
import { AxiosResponse } from "axios";

export const getArticles = async ({
  page,
  pageSize,
  orderBy,
  keyword,
}: GetArticles) => {
  const orderByQuery = orderBy ? `&orderBy=${orderBy}` : "";
  const keywordQuery = keyword ? `&keyword=${keyword}` : "";

  const res: AxiosResponse = await axios.get<ArticlesResponse>(
    `/articles?page=${page}&pageSize=${pageSize}${orderByQuery}${keywordQuery}`
  );
  if (res.status !== 200) throw new Error("getArticles api 오류");
  const result = res.data;
  return result;
};

export const getArticle = async (articleId: number) => {
  const res = await axios.get(`/articles/${articleId}`);
  if (res.status !== 200) throw new Error("getArticle api 오류");
  const result = res.data;
  return result;
};

export const getComments = async (articleId: number, limit: number) => {
  const res = await axios.get(`articles/${articleId}/comments?limit=${limit}`);
  if (res.status !== 200) throw new Error("getComments api 오류");
  const result = res.data;
  return result;
};
