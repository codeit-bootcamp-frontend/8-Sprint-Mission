import { fetchFromApi, BASE_URL } from "./fetchFromApi";
import { ArticleResponse } from "DTO/article";
import { Article } from "DTO/article";

// 전체 아티클 가져오기
interface GetArticlesParams {
  page: string;
  pageSize: string;
  orderBy: string;
}

export async function getArticles(
  params: GetArticlesParams
): Promise<ArticleResponse> {
  const query = new URLSearchParams({
    page: params.page,
    pageSize: params.pageSize,
    orderBy: params.orderBy,
  }).toString();
  const url = `${BASE_URL}/articles?${query}`;
  return fetchFromApi<ArticleResponse>(url);
}

// 특정 아티클 가져오기
interface GetArticleIdParams {
  articleId: number;
}

export async function getArticleId({
  articleId,
}: GetArticleIdParams): Promise<Article> {
  const url = `${BASE_URL}/articles/${articleId}`;
  return fetchFromApi<Article>(url);
}
