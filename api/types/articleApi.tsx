import axios from "axios";

const API_URL = "https://learn.codeit.kr/api/film-reviews";

export const postArticle = async (body: FormData) => {
  try {
    const response = await axios.post(API_URL, body);
    return response.data;
  } catch (error) {
    console.error("Error posting board:", error);
    throw error;
  }
};
