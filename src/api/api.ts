import {
  ArticlesAdd,
  ArticlesDetailQuery,
  ArticlesQuery,
} from "@/types/articleType";
import { ArticlesCommentQuery } from "@/types/commentType";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getArticles = async ({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
}: ArticlesQuery) => {
  try {
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
    const query = `/articles/${articleId}/comments?limit=${limit}&cursor=${cursor}`;
    const response = await axios.get(`${BASE_URL}${query}`);
    return response.data;
  } catch (err) {
    console.error("Error Messages: " + err);
  }
};

export const postLogin = async () => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/signIn`, {
      email: "dang96@email.com",
      password: "92089208",
    });

    const token = response.data.accessToken;
    localStorage.setItem("token", token);
    return token;
  } catch (err) {
    console.error("Error Messages: " + err);
  }
};

export const postArticlesImage = async (file: File) => {
  const token = localStorage.getItem("token");

  if (!token) {
    console.error("Error Messages: 토큰이 없습니다.");
    return;
  }
  const formData = new FormData();
  formData.append("image", file);

  try {
    const response = await axios.post(`${BASE_URL}/images/upload`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data.url;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("Error Messages: ", err.response?.data || err.message);
    } else {
      console.error("Error Messages: ", err);
    }
  }
};

export const postArticles = async ({ image, content, title }: ArticlesAdd) => {
  const token = localStorage.getItem("token");

  if (!token) {
    console.error("Error Messages: 토큰이 없습니다.");
    return;
  }

  try {
    const response = await axios.post(
      `${BASE_URL}/articles`,
      {
        image,
        content,
        title,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("Error Messages: ", err.response?.data || err.message);
    } else {
      console.error("Error Messages: ", err);
    }
  }
};
