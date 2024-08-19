import { Article } from '@/types/Article';
import instance from '.';

async function getArticleById(id: string) {
  const res = await instance.get<Article>(`/articles/${id}`);
  return res;
}

export default getArticleById;
