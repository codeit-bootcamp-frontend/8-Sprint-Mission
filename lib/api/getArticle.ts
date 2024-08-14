import instance from '.';

async function getArticles(params: ArticlesQuery): Promise<ArticlesResponse> {
  const res = await instance.get<ArticlesResponse>(`/articles`, {
    params,
  });
  const { data } = res;
  return data;
}

export default getArticles;
