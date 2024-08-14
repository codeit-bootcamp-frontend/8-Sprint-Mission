import instance from '.';

async function deleteArticle(id: number, token: string) {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  await instance.delete(`/articles/${id}`, {
    headers,
  });
}

export default deleteArticle;
