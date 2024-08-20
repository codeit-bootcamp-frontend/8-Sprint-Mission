import axios from "axios";

const instance = axios.create({
  baseURL: "https://panda-market-api.vercel.app",
});

export default instance;

export const fetchArticles = async () => {
  try {
    const res = await instance.get("/articles", {
      params: {
        orderBy: "recent",
      },
    });
    return res.data.results || res.data.list || [];
  } catch (error) {
    console.error("Failed to fetch all articles", error);
    throw error;
  }
};

export const fetchBestArticles = async (pageSize: number) => {
  try {
    const res = await instance.get("/articles", {
      params: {
        page: 1,
        pageSize,
        orderBy: "like",
      },
    });
    return res.data.results || res.data.list || [];
  } catch (error) {
    console.error("Failed to fetch best articles", error);
    throw error;
  }
};

export const fetchAllArticles = async (orderBy: string, keyword: string) => {
  try {
    const res = await instance.get("/articles", {
      params: {
        orderBy,
        keyword,
      },
    });
    return res.data.results || res.data.list || [];
  } catch (error) {
    console.error("Failed to fetch all articles", error);
    throw error;
  }
};
