import { Product } from "DTO/product";
import { CommentResponse } from "DTO/comment";
import { ArticleResponse } from "DTO/article";

const BASE_URL = "https://panda-market-api.vercel.app";

// API 요청을 위한 fetch 함수
async function fetchFromApi<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP 에러: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("API 요청 실패:", error);
    throw error;
  }
}

// 제품 목록 가져오기
interface GetProductsParams {
  page: string;
  pageSize: string;
  orderBy: string;
}

export async function getProducts(params: GetProductsParams) {
  const query = new URLSearchParams({
    page: params.page,
    pageSize: params.pageSize,
    orderBy: params.orderBy,
  }).toString();
  const url = `${BASE_URL}/products?${query}`;
  return fetchFromApi<any>(url);
}

// 특정 제품 가져오기
interface GetProductIdParams {
  productId: number;
}

export async function getProductId({
  productId,
}: GetProductIdParams): Promise<Product> {
  const url = `${BASE_URL}/products/${productId}`;
  return fetchFromApi<Product>(url);
}

// 제품의 댓글 가져오기
interface GetProductCommentsParams {
  productId: number;
  limit?: number;
}

export async function getProductComments({
  productId,
  limit = 3,
}: GetProductCommentsParams): Promise<CommentResponse[]> {
  const query = new URLSearchParams({ limit: limit.toString() }).toString();
  const url = `${BASE_URL}/products/${productId}/comments?${query}`;
  return fetchFromApi<CommentResponse[]>(url);
}

// 아티클 목록 가져오기
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
