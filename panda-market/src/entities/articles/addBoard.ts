import { API_PATH } from '@/f_shared/config';
import { instance } from '../instance';
import { AddBoardParams, Article } from './types';

export const addBoard = async ({ title, content, image }: AddBoardParams) => {
  const data = image ? { title, content, image } : { title, content };
  const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
  return await instance
    .post<Article>(API_PATH.article, JSON.stringify(data), {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((res) => {
      if (res.status === 200) {
        return res.data;
      }
      throw new Error(`${res.status} ${res.data}`);
    })
    .catch((e) => {
      if (e.response.status === 401) {
        console.log('재로그인!');
      }
      console.log(e);
    });
};
