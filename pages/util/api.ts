import axios from "@/lib/axios";
import { AxiosError } from "axios";
import { articleType } from "@/interfaces/article";
import { UserInfo } from "@/interfaces/user";

export async function getArticles(
  page: number,
  pageSize: number,
  orderBy: string
) {
  const response = await axios.get(
    `/articles?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`
  );
  const body = response.data.list ?? [];

  return body;
}

export async function postArticle(articleValue: articleType) {
  const accessToken = localStorage.getItem("access_token");

  const response = await axios.post(`/articles`, articleValue, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });
  const body = response.data;

  return body;
}

export async function postArticleComment(articleId: string, content: string) {
  const accessToken = localStorage.getItem("access_token");
  const response = await axios.post(
    `/articles/${articleId}/comments`,
    { content },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    }
  );
  const body = response.data ?? [];

  console.log(body);

  return body;
}

export async function signInUser({ email, password }: UserInfo) {
  try {
    const response = await axios.post(`/auth/signIn`, { email, password });
    const { accessToken, refreshToken } = response.data;

    localStorage.setItem("access_token", accessToken);
    localStorage.setItem("refresh_token", refreshToken);
    window.location.href = "/";
  } catch (error) {
    console.log(error);
  }
}

export async function signUpUser({
  email,
  nickname,
  password,
  passwordConfirmation,
}: UserInfo) {
  const response = await axios.post(`/auth/signUp`, {
    email,
    nickname,
    password,
    passwordConfirmation,
  });
  const { accessToken, refreshToken } = response.data;

  localStorage.setItem("access_token", accessToken);
  localStorage.setItem("refresh_token", refreshToken);
  window.location.href = "/";
}

export async function getArticleId(articleId: string) {
  const response = await axios.get(`/articles/${articleId}`);
  const body = response.data;

  return body;
}

export async function getArticleComment(articleId: string) {
  const response = await axios.get(`/articles/${articleId}/comments?limit=10`);
  const body = response.data.list ?? [];

  return body;
}

export function isLoggedIn(): boolean {
  const accessToken = localStorage.getItem("access_token");
  return !!accessToken;
}
