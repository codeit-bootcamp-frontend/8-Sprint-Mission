import axios from "axios";

interface valuetype {
  email: string;
  nickname?: string;
  password: string;
  passwordConfirmation?: string;
}

const apiUrl = process.env.REACT_APP_API_BASE_URL as string;

export const postAuthSignIn = async (body: valuetype) => {
  try {
    const res = await axios.post(`${apiUrl}/auth/signIn`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data);
    } else {
      console.error("Unknown error:", error);
    }
    throw error;
  }
};

export const postAuthSignUp = async (body: valuetype) => {
  try {
    const res = await axios.post(`${apiUrl}/auth/signUp`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data);
    } else {
      console.error("Unknown error:", error);
    }
    throw error;
  }
};
