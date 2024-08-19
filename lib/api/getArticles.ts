import { GetArticlesQuery, GetArticlesResponse } from '@/types/Article';
import instance from '.';

async function getArticles(
  params: GetArticlesQuery
): Promise<GetArticlesResponse> {
  const res = await instance.get<GetArticlesResponse>(`/articles`, {
    params,
  });
  const { data } = res;
  return data;
}

export default getArticles;
