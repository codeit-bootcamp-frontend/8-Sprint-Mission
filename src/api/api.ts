import { ArticlesQuery } from "@/types/articleType";
import axios from "axios";

export const getArticles = async ({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
}: ArticlesQuery) => {
  try {
    const BASE_URL =
      process.env.REACT_APP_BASE_URL || "https://panda-market-api.vercel.app";
    const query = `/articles?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`;
    const response = await axios.get(`${BASE_URL}${query}`);
    return response.data;
  } catch (error) {
    console.error("Error Messages: " + error);
  }
};
