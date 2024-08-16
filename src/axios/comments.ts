import axiosInstance from "./instance";

interface GetArticleCommentsProps {
  productId: number;
  limit: number;
  cursor?: number;
}

interface Writer {
  id: number;
  image: string;
  nickname: string;
}

interface Comment {
  id: number;
  content: string;
  updatedAt: string;
  createdAt: string;
  writer: Writer;
}

interface ArticleCommentsResponse {
  nextCursor: number;
  list: Comment[];
}

export async function getArticleComments({ productId, limit, cursor }: GetArticleCommentsProps) {
  const query = `limit=${limit}&cursor=${cursor}`;
  const res = await axiosInstance.get(`/products/${productId}/comments?${query}`);
  const { nextCursor, list }: ArticleCommentsResponse = res.data;
  return { nextCursor, list };
}

interface PostArticleCommentProps {
  productId: number;
  content: string;
}
export async function postArticleComment({ productId, content }: PostArticleCommentProps) {
  const res = await axiosInstance.post(`/${productId}`);
  return res.data as Comment;
}
