import { PostArticleResponse } from '@/types/Article';
import instance from '.';

async function postArticle(
  body: {
    title: string;
    content: string;
    image: string;
  },
  token: string | null
) {
  if (token === null)
    return {
      message: 'Unauthorized',
    };
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };
  const { data } = await instance.post<PostArticleResponse>('/articles', body, {
    headers,
  });
  return data;
}

export default postArticle;
