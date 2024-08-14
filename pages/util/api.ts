import axios from "@/lib/axios";

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
