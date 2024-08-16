import { API_PATH } from '@/f_shared/config';
import { instance } from '../instance';
import { BoardDetailParams } from './types';

export const getBoardDetail = async ({ boardItemId }: BoardDetailParams) => {
  return await instance
    .get(API_PATH.articlePath.detail(boardItemId))
    .then((res) => res)
    .catch((e) => {
      throw new Error(e);
    });
};
