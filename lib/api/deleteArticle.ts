import instance from '.';

async function deleteArticle(id: number) {
  await instance.delete(`/articles/${id}`);
}

export default deleteArticle;
