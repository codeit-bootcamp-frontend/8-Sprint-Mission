import instance from "@/lib/instance";
import { API_PATH } from "@/lib/path";
import {
  fetchArticleByIdParams,
  fetchArticleCommentsByIdParams,
} from "./types";

export async function fetchArticleById({ articleId }: fetchArticleByIdParams) {
  const response = await instance.get(API_PATH.articleById(articleId));
  console.log(response);
  return response.data ?? [];
}

export async function fetchArticleCommentsById({
  articleId,
}: fetchArticleCommentsByIdParams) {
  const LIMIT = 10;
  const response = await instance.get(
    API_PATH.articleCommentsWithLimit(articleId, LIMIT),
  );
  return response.data.list ?? [];
}
