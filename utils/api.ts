import axios from '@/lib/axios';

interface QueryType {
  query: {
    orderBy?: 'recent' | 'like';
    keyword?: string;
    pageSize?: string | number;
    page?: number;
  };
}

interface CommentQueryType {
  query: {
    limit: number;
  };
}

export async function getPostList({ query }: QueryType) {
  const { orderBy, keyword, pageSize, page } = query;
  const res = await axios.get(
    `/articles?orderBy=${orderBy}&keyword=${keyword ?? ''}&pageSize=${
      pageSize ?? 6
    }&page=${page ?? 1}`
  );
  const postList = res.data;
  return postList;
}

export async function getPost(id: string | string[] | undefined) {
  const res = await axios.get(`/articles/${id}`);
  const post = res.data;
  return post;
}

export async function getPostComment(
  { query }: CommentQueryType,
  id: string | string[] | undefined
) {
  const { limit } = query;
  const res = await axios.get(`/articles/${id}/comments?limit=${limit ?? 10}`);
  const post = res.data;
  return post;
}

export async function postNewArticleComment(
  id: string | string[] | undefined,
  data,
  token
) {
  const res = await axios.post(`/articles/${id}/comments`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const post = res.data;
  return post;
}
