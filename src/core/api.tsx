import { Product, ProductResponse } from "DTO/product";
import { CommentResponse } from "DTO/comment";

interface GetProductsParams {
  page: string;
  pageSize: string;
  orderBy: string;
}

const BASE_URL = "https://panda-market-api.vercel.app";

export async function getProducts({
  page,
  pageSize,
  orderBy,
}: GetProductsParams) {
  const query = new URLSearchParams({ page, pageSize, orderBy }).toString();

  try {
    const response = await fetch(`${BASE_URL}/products?${query}`);
    const itemData = await response.json();
    return itemData;
  } catch (error) {
    console.error("getProducts 리퀘스트 실패:", error);
    throw error;
  }
}

interface GetProductIdParams {
  productId: number;
}

export async function getProductId({
  productId,
}: GetProductIdParams): Promise<Product> {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`);
    const itemData = await response.json();
    return itemData;
  } catch (error) {
    console.error("getProductId 리퀘스트 실패:", error);
    throw error;
  }
}

interface GetProductCommentsParams {
  productId: number;
  limit?: number;
}

export async function getProductComments({
  productId,
  limit = 3,
}: GetProductCommentsParams): Promise<CommentResponse[]> {
  const query = new URLSearchParams({ limit: limit.toString() }).toString();

  try {
    const response = await fetch(
      `${BASE_URL}/products/${productId}/comments?${query}`
    );
    const itemData = await response.json();
    return itemData;
  } catch (error) {
    console.error("getProductComments 리퀘스트 실패:", error);
    throw error;
  }
}
