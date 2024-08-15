import { API_PATH } from '@/f_shared/config';
import { instance } from '../instance';
import { AddBoardParams, Article } from './types';

export const addBoard = async ({ title, content, image }: AddBoardParams) => {
  const data = image ? { title, content, image } : { title, content };
  const accessToken = process.env.ACCESS_TOKEN;
  return await instance.post<Article>(API_PATH.article, JSON.stringify(data), {
    headers: {
      accessToken,
    },
  });
};
