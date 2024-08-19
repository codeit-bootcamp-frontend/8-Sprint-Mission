import instance from '.';

async function postArticleComment(
  id: string,
  body: {
    content: string;
  }
) {
  const res = await instance.post(`/articles/${id}/comments`, body);
  return res;
}

export default postArticleComment;
