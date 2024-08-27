import axios from "@/lib/axios";

interface PostArticleCommentParams {
  articleId: number;
  data: string;
}

export const postArticleComment = async ({
  articleId,
  data,
}: PostArticleCommentParams) => {
  try {
    const body = {
      content: data,
    };
    const res = await axios.post(`/articles/${articleId}/comments`, body);
  } catch (err) {
    console.log(err);
  }
};
