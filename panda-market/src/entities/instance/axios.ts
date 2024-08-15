import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// instance.interceptors.request.use(
//   (config) => {
//     return config;
//   },
//   (error) => Promise.reject(error),
// );
// instance.interceptors.response.use(
//   (res) => res,
//   async (error) => {},
// );
