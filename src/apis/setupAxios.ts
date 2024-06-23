import axios from 'axios';

export const axiosInstance = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    accept: 'application/json',
  },
});
