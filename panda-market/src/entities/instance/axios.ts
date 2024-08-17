import { API_PATH } from '@/f_shared';
import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const refreshAccessToken = async () => {
  const refreshToken = process.env.NEXT_PUBLIC_REFRESH_TOKEN;
  return await instance
    .post(API_PATH.authPath.refreshToken, JSON.stringify({ refreshToken }))
    .then((res) => res.data)
    .catch((e) => {
      throw new Error(e);
    });
};

// instance.interceptors.request.use(
//   (config) => {
//     return config;
//   },
//   (error) => Promise.reject(error),
// );
instance.interceptors.response.use(
  (res) => res,
  async (error) => {
    console.log(error);
    if (error.response.status === 401) {
      const { accessToken } = await refreshAccessToken();
      error.config.headers.Authorization = `Bearer ${accessToken}`;
      return await axios.request(error.config);
    }
    return Promise.reject(error);
  },
);
