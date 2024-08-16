import axios, { AxiosResponse, AxiosError, InternalAxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

/**
 * http request가 넘어가기 전에 call 되는 함수
 */
const onRequest = (config: InternalAxiosRequestConfig) => {
  if (typeof window !== "undefined") {
    const accessToken = localStorage.getItem("access_token");

    if (accessToken && config.headers) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
  }
  return config;
};

/**
 * http response가 catch로 넘어가기 전에 call 되는 함수
 */
const onErrorResponse = async (error: AxiosError | Error) => {
  if (axios.isAxiosError(error)) {
    const { status, data } = error.response as AxiosResponse;

    switch (status) {
      case 400: {
        alert("입력한 정보가 올바르지 않습니다.");
      }

      case 401: {
        if (data.message === "jwt expired") {
          const refreshToken = localStorage.getItem("refresh_token");

          if (refreshToken) {
            const res = await axiosInstance.post("/auth/refresh-token", { refreshToken });

            const { accessToken } = res.data;
            localStorage.setItem("access_token", accessToken);
          } else {
            // alert("로그인이 만료되었습니다. 다시 로그인 해주세요.");
            // window.location.href = '/login';
          }
        } else if (data.message === "jwt malformed") {
          // localStorage.removeItem("access_token");
          // localStorage.removeItem("refresh_token");
          // alert("세션이 올바르지 않습니다. 다시 로그인 해주세요.")
          // window.location.href = "/login";
        } else {
          // alert("로그인이 필요합니다.");
          // window.location.href = "/login";
        }
        break;
      }

      default: {
        console.log(error.message);
        break;
      }
    }
  }

  return Promise.reject(error);
};

axiosInstance.interceptors.request.use(onRequest);
axiosInstance.interceptors.response.use((response: AxiosResponse) => response, onErrorResponse);

export default axiosInstance;
