import { CommentResponse } from "core/dtos/commentDTO";
import { getFromApi, BASE_URL } from "./apiService";

async function getComments(
  basePath: string,
  id: number,
  limit: number
): Promise<CommentResponse> {
  const query = new URLSearchParams({ limit: limit.toString() }).toString();
  const url = `${BASE_URL}/${basePath}/${id}/comments?${query}`;
  return getFromApi<CommentResponse>(url);
}

export async function getProductComments({
  id,
  limit = 5,
}: {
  id: number;
  limit?: number;
}): Promise<CommentResponse> {
  return getComments("products", id, limit);
}

export async function getArticleComments({
  id,
  limit = 5,
}: {
  id: number;
  limit?: number;
}): Promise<CommentResponse> {
  return getComments("articles", id, limit);
}
