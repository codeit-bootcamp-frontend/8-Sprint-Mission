import { AxiosError, AxiosResponse } from 'axios';
import { ArticleResponse, GetArticleRequest } from '@/entities/articles';
import { instance } from '@/shared/api';
import { API_PATH } from '@/shared/config';

export const getBoards = async ({
  page = 1,
  orderBy = 'recent',
  pageSize = 10,
  keyword,
}: GetArticleRequest) => {
  return await instance
    .get<GetArticleRequest, AxiosResponse<ArticleResponse>>(API_PATH.article, {
      params: {
        page,
        orderBy,
        pageSize,
        keyword,
      },
    })
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
