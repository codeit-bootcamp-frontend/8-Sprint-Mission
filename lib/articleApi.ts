import {
  Article,
  ArticlesResponse,
  CommentsResponse,
  GetArticles,
} from "@/types/types";
import axios from "@/lib/axios";
import { AxiosResponse } from "axios";

export const getArticles = async ({
  page,
  pageSize,
  orderBy,
  keyword,
}: GetArticles): Promise<ArticlesResponse> => {
  try {
    const orderByQuery = orderBy ? `&orderBy=${orderBy}` : "";
    const keywordQuery = keyword ? `&keyword=${keyword}` : "";

    const res: AxiosResponse<ArticlesResponse> =
      await axios.get<ArticlesResponse>(
        `/articles?page=${page}&pageSize=${pageSize}${orderByQuery}${keywordQuery}`
      );

    if (res.status !== 200) {
      throw new Error("getArticles API 오류");
    }

    return res.data;
  } catch (error) {
    console.error("Error in getArticles:", error);
    throw error;
  }
};

export const getArticle = async (articleId: number): Promise<Article> => {
  try {
    const res = await axios.get<Article>(`/articles/${articleId}`);
    if (res.status !== 200) throw new Error("getArticle api 오류");
    const result = res.data;
    return result;
  } catch (error) {
    console.error("Error in getArticle:", error);
    throw error;
  }
};

export const getComments = async (
  articleId: number,
  limit: number
): Promise<CommentsResponse> => {
  try {
    const res = await axios.get<CommentsResponse>(
      `articles/${articleId}/comments?limit=${limit}`
    );

    if (res.status !== 200) {
      throw new Error("getComments API 오류");
    }

    return res.data;
  } catch (error) {
    console.error("Error in getComments:", error);
    throw error;
  }
};
