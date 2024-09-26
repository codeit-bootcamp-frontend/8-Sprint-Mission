import axios, { InternalAxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    if (response.status === 404) {
      // TODO: 404 page 만들기
      window.location.href = "/404";
    }
    return response;
  },
  async (error) => {
    if (error.response?.status === 401) {
      const refreshToken = localStorage.getItem('refreshToken');
      if (refreshToken) {
        try {
          // Refresh token 요청
          const { data } = await axios.post('/auth/refresh', { refreshToken: refreshToken });
          console.log('New Access Token:', data.accessToken); // 새로운 토큰 로그
          
          // 새로운 토큰 저장
          localStorage.setItem('accessToken', data.accessToken);

          // 원래 요청 재시도
          error.config.headers['Authorization'] = `Bearer ${data.accessToken}`;
          return axios.request(error.config);
        } catch (refreshError) {
          console.error('Failed to refresh token:', refreshError); // 갱신 실패 로그
          // window.location.href = '/login'; // 실패 시 로그인으로 리디렉션
        }
      } else {
        console.error('No Refresh Token available. Redirecting to login.');
        // window.location.href = '/login';
      }
      return Promise.reject(error);
    }
  }
);

export default instance;
