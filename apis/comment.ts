import axios from "@/lib/axios";

interface PostArticleCommentParams {
  articleId: number;
  data: string;
  token: string;
}

export const postArticleComment = async ({
  articleId,
  data,
  token,
}: PostArticleCommentParams) => {
  try {
    const body = {
      content: data,
    };
    const res = await axios.post(`/articles/${articleId}/comments`, body, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (err) {
    console.log(err);
  }
};
