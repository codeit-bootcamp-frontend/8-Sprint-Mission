import axios, { InternalAxiosRequestConfig } from 'axios';

const BASE_URL = 'https://panda-market-api.vercel.app';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // const cookieStore = cookies();
    // const accessToken = cookieStore.get(AUTH_COOKIE_KEYS.accessToken)?.value;
    const accessToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjksInNjb3BlIjoiYWNjZXNzIiwiaWF0IjoxNzIzOTg4NDgyLCJleHAiOjE3MjM5OTAyODIsImlzcyI6InNwLXBhbmRhLW1hcmtldCJ9._TZitbkAShzoJyv32kkYDmVLfUbnEjTBFn6pGBMaicM';

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
      return config;
    }
    // throw new Error('로그인이 필요합니다.');
    return config;
  },
  (error) => {
    // 에러 핸들링
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      await axiosInstance.post('/auth/refresh-token', undefined);
      originalRequest._retry = true;
      return axiosInstance(originalRequest);
    }
    return Promise.reject(error);
  }
);

export { axiosInstance };
