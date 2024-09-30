import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("userInfo");

		if(token) {
			const userInfo = JSON.parse(token);
			const userInfoAccessToken = userInfo.accessToken;

			if (userInfoAccessToken && !config.url?.includes("/auth/signIn")) {
				config.headers.Authorization = `Bearer ${userInfoAccessToken}`;
			}

		}

    return config;
  },
  (error) => {
    console.error("Error Messages: ", error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error)) {
      console.error("Error Messages: ", error.response?.data || error.message);
    } else {
      console.error("Error Messages: ", error);
    }
    return Promise.reject(error);
  }
);
