import { ArticlesDetailQuery, ArticlesQuery } from "@/types/articleType";
import { ArticlesCommentQuery } from "@/types/commentType";
import axios from "axios";

export const getArticles = async ({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
}: ArticlesQuery) => {
  try {
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
    const query = `/articles?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`;
    const response = await axios.get(`${BASE_URL}${query}`);
    return response.data;
  } catch (err) {
    console.error("Error Messages: " + err);
  }
};

export const getArticlesDetail = async ({
  articleId = 0,
}: ArticlesDetailQuery) => {
  try {
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await axios.get(`${BASE_URL}/articles/${articleId}`);
    return response.data;
  } catch (err) {
    console.error("Error Messages: " + err);
  }
};

export const getArticlesComment = async ({
  articleId = 1,
  limit = 3,
  cursor = 0,
}: ArticlesCommentQuery) => {
  try {
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
    const query = `/articles/${articleId}/comments?limit=${limit}&cursor=${cursor}`;
    const response = await axios.get(`${BASE_URL}${query}`);
    return response.data;
  } catch (err) {
    console.error("Error Messages: " + err);
  }
};
