import axios from "@/lib/axios";
import {
  Article,
  ArticleQuery,
  CommentResponse,
  GetCommentParam,
} from "@/types/article";
import { ArticleResponse } from "@/types/article";

export const getArticleList = async ({
  page = 1,
  pageSize = 5,
  orderBy = "recent",
  keyword,
}: ArticleQuery) => {
  const res = await axios.get(
    `/articles?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}${
      keyword ? `&keyword=${keyword}` : ""
    }`
  );
  const { list, totalCount }: ArticleResponse = res.data;
  return { list, totalCount };
};

export const getArticlesById = async (articleId: number) => {
  const res = await axios.get(`/articles/${articleId}`);
  const { data }: { data: Article } = res;
  return data;
};

export const getArticleComment = async ({
  articleId,
  limit = 5,
  cursor,
}: GetCommentParam) => {
  const res = await axios.get(
    `/articles/${articleId}/comments?limit=${limit}${
      cursor ? `&cursor=${cursor}` : ""
    }`
  );
  const { data }: { data: CommentResponse } = res;
  return data;
};
