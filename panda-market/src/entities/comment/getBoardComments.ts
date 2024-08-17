import { API_PATH } from '@/f_shared';
import { instance } from '../instance';
import { ArticleCommentsResponse, GetArticleCommentsQuery } from './types';
import { AxiosResponse } from 'axios';

export const getBoardComments = async ({
  articleId,
  limit,
  cursor,
}: GetArticleCommentsQuery) => {
  return await instance
    .get<GetArticleCommentsQuery, AxiosResponse<ArticleCommentsResponse>>(
      API_PATH.commentPath.articles(articleId),
      {
        params: {
          limit,
          cursor,
        },
      },
    )
    .then((res) => {
      // if (res.status === 200) {
      //   return res.data;
      // }

      // if (res.status === 404) {
      //   throw new Error(
      //     `요청한 데이터를 찾을 수 없습니다. \n ErrorStatus: ${res.status} \n ErrorMessage: ${res.data}`,
      //   );
      // }
      return res.data;
    })
    .catch((e) => {
      return e;
    });
};
