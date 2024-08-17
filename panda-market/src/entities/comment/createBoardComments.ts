import { API_PATH } from '@/f_shared';
import { instance } from '../instance';
import { Comment, CreateArticleCommentsData } from './types';

export const createBoardComments = async ({
  articleId,
  content,
}: CreateArticleCommentsData) => {
  const apiData = { content };
  const accessToken = sessionStorage.getItem('userInfo');
  return await instance
    .post<Comment>(
      API_PATH.commentPath.articles(articleId),
      JSON.stringify(apiData),
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    )
    .then((res) => res)
    .catch((e) => {
      console.log(e);
    });
};
