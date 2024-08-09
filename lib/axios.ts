import axios from 'axios';

const BASE_URL = `https://panda-market-api.vercel.app`;

const instance = axios.create({
  baseURL: BASE_URL,
});

export default instance;
