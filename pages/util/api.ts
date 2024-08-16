import axios from "@/lib/axios";
import { articleType } from "@/interfaces/article";

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
  const accessToken = "";
  const formString = JSON.stringify(articleValue);
  const response = await axios.post(`/articles`, formString, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });
  const body = response.data;

  return body;
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
