import axios, { AxiosError } from "axios";

const instance = axios.create({
  baseURL: " https://panda-market-api.vercel.app/",
});

// 요청 인터셉터
instance.interceptors.request.use(
  (config) => {
    // 요청이 가기 전에 할 작업
    // 예: 인증 토큰 추가
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // 요청 에러 처리
    return Promise.reject(error);
  }
);

// 응답 인터셉터
instance.interceptors.response.use(
  (response) => {
    // 응답 데이터 처리
    return response;
  },
  (error: AxiosError) => {
    // 응답 에러 처리
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // 서버 응답이 있는 경우
        console.error("서버 에러:", error.response.data);
        alert("유효하지 않은 아이디 입니다.");
      } else if (error.request) {
        // 요청이 보내졌으나 응답이 없는 경우
        console.error("요청 에러:", error.request);
      } else {
        // 에러를 발생시킨 요청 구성 문제
        console.error("에러 구성:", error.message);
      }
    } else {
      // Axios가 아닌 다른 에러
      console.error("기타 에러:", error);
    }
    return Promise.reject(error);
  }
);

export default instance;
