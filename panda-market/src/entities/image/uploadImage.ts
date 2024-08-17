import { API_PATH } from '@/f_shared/config';
import { instance } from '../instance';
import { ImageResponse, ImageUploadParams } from './types';

export const uploadImage = async ({ image }: ImageUploadParams) => {
  const data = { image };
  const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
  return await instance
    .post<ImageResponse>(API_PATH.images, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((res) => res.data)
    .catch((e) => {
      console.log(e);
    });
};
