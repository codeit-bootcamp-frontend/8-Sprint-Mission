import {
  ArticlesAdd,
  ArticlesDetailQuery,
  ArticlesQuery,
} from "@/types/articleType";
import { ArticlesCommentQuery } from "@/types/commentType";
import { axiosInstance } from "./axiosInstance";

export const getArticles = async ({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
}: ArticlesQuery) => {
  try {
    const query = `/articles?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`;
    const response = await axiosInstance.get(query);
    return response.data;
  } catch (err) {
    console.error("게시글 데이터 가져오기 오류");
  }
};

export const getArticlesDetail = async ({
  articleId = 0,
}: ArticlesDetailQuery) => {
  try {
    const response = await axiosInstance.get(`/articles/${articleId}`);
    return response.data;
  } catch (err) {
    console.error("게시글 상세 데이터 가져오기 오류");
  }
};

export const getArticlesComment = async ({
  articleId = 1,
  limit = 3,
  cursor = 0,
}: ArticlesCommentQuery) => {
  try {
    const query = `/articles/${articleId}/comments?limit=${limit}&cursor=${cursor}`;
    const response = await axiosInstance.get(query);
    return response.data;
  } catch (err) {
    console.error("게시글 댓글 데이터 가져오기 오류");
  }
};

export const postLogin = async () => {
  try {
    const response = await axiosInstance.post(`/auth/signIn`, {
      email: "dang96@email.com",
      password: "92089208",
    });

    const token = response.data.accessToken;
    localStorage.setItem("token", token);
    return token;
  } catch (err) {
    console.error("로그인 토큰 가져오기 오류");
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
    const response = await axiosInstance.post("/images/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data.url;
  } catch (err) {
    console.error("이미지 전송 오류");
  }
};

export const postArticles = async ({ image, content, title }: ArticlesAdd) => {
  const token = localStorage.getItem("token");

  if (!token) {
    console.error("Error Messages: 토큰이 없습니다.");
    return;
  }

  const defaultImg = image || "http://via.placeholder.com/500.jpg/";

  try {
    const response = await axiosInstance.post("/articles", {
      image: defaultImg,
      content,
      title,
    });
  } catch (err) {
    console.error("게시글 작성 오류");
  }
};
