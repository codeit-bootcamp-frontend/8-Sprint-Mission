import axios from "@/lib/axios";

export const getMe = async () => {
  try {
    const res = await axios.get("/users/me");
    return res.data;
  } catch {
    console.log("유저정보가 없습니다");
  }
};
