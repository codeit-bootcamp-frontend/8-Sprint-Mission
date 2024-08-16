import { API_PATH } from '@/f_shared/config';
import { instance } from '../instance';
import { ImageResponse, ImageUploadParams } from './types';

export const uploadImage = async ({ image }: ImageUploadParams) => {
  const data = { image };
  const accessToken = process.env.ACCESS_TOKEN;
  return await instance.post<ImageResponse>(
    API_PATH.images,
    JSON.stringify(data),
    {
      headers: {
        accessToken,
        'Content-Type': 'multipart/form-data',
      },
    },
  );
};
