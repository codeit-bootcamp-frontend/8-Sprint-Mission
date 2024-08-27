import { PostArticleResponse } from '@/types/Article';
import instance from '.';

async function postArticle(body: {
  title: string;
  content: string;
  image: string;
}) {
  const { data } = await instance.post<PostArticleResponse>('/articles', body);
  return data;
}

export default postArticle;
