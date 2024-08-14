import { ArticleState, PostArticleResponse } from '@/types/Article';
import instance from '.';

async function postArticle(body: ArticleState, token: string | null) {
  if (token === null)
    return {
      message: 'Unauthorized',
    };
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };
  const { data } = await instance.post<PostArticleResponse>(
    '/auth/signIn',
    body,
    {
      headers,
    }
  );
  return data;
}

export default postArticle;
