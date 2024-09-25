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
      config.headers["Content-Type"] = "application/json";
      config.headers["Authorization"] = `Bearer ${accessToken}`;
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
      // TODO: 리프레시 토큰 사용해서 엑세스 토큰 갱신
      // isTokenExpired() - 토큰 만료 여부를 확인하는 함수
      // tokenRefresh() - 토큰을 갱신해주는 함수
      // if (isTokenExpired()) await tokenRefresh();
      const accessToken = localStorage.getItem("accessToken");
      if (accessToken) {
        error.config.headers["Content-Type"] = "application/json";
        error.config.headers["Authorization"] = `Bearer ${accessToken}`;
      }
      const response = await axios.request(error.config);
      return response;
    }
    return Promise.reject(error);
  },
);

export default instance;
