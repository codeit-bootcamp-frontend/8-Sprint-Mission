import axiosInstance from "./instance";

interface Writer {
  id: number;
  image: string;
  nickname: string;
}

export interface Comment {
  id: number;
  content: string;
  updatedAt: string;
  createdAt: string;
  writer: Writer;
}

interface GetArticleCommentsProps {
  articleId: number;
  limit: number;
  cursor?: number;
}

export interface ArticleCommentsResponse {
  nextCursor: number | null;
  list: Comment[];
}

export async function getArticleComments({ articleId, limit, cursor }: GetArticleCommentsProps) {
  let query = `limit=${limit}`;
  if (cursor) {
    query += `&cursor=${cursor}`;
  }
  const res = await axiosInstance.get(`/articles/${articleId}/comments?${query}`);
  const { nextCursor, list }: ArticleCommentsResponse = res.data;
  return { nextCursor, list };
}

interface PostArticleCommentProps {
  articleId: number;
  content: string;
}

export async function postArticleComment({ articleId, content }: PostArticleCommentProps) {
  const res = await axiosInstance.post(`/articles/${articleId}/comments`, { content });
  return res.data as Comment;
}
