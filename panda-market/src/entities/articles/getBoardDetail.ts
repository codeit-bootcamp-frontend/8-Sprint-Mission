import { API_PATH } from '@/f_shared/config';
import { instance } from '../instance';
import { Article, BoardDetailParams } from './types';

export const getBoardDetail = async ({ boardItemId }: BoardDetailParams) => {
  return await instance
    .get<Article>(API_PATH.articlePath.detail(boardItemId))
    .then((res) => res.data)
    .catch((e) => {
      throw new Error(e);
    });
};
