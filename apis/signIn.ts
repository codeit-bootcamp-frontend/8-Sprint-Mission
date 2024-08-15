import axios from "@/lib/axios";
import { access } from "fs";

interface AuthData {
  email: string;
  password: string;
}

interface ResponseData {
  accessToken: string;
  refreshToken: string;
}

export const postSignIn = async (authData: AuthData) => {
  const res = await axios.post("/auth/signIn", authData);
  const { accessToken, refreshToken }: ResponseData = res.data;
  return { accessToken, refreshToken };
};
