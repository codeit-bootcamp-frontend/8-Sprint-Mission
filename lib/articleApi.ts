import {
  Article,
  ArticlesResponse,
  CommentsResponse,
  GetArticles,
} from "@/types/types";
import axios from "@/lib/axios";
import { AxiosResponse } from "axios";
import { API_ENDPOINTS } from "@/lib/address";

export const getArticles = async ({
  page,
  pageSize,
  orderBy,
  keyword,
}: GetArticles): Promise<ArticlesResponse> => {
  try {
    const res: AxiosResponse<ArticlesResponse> =
      await axios.get<ArticlesResponse>(
        API_ENDPOINTS.getArticles(page, pageSize, orderBy, keyword)
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
    const res = await axios.get<Article>(API_ENDPOINTS.getArticle(articleId));
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
      API_ENDPOINTS.getComments(articleId, limit)
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
