import { AddUserRequest, LoginUserRequest } from "@/types/types";
import axios from "@/lib/axios";
import { API_ENDPOINTS } from "@/lib/address";

export const signupUser = async (data: AddUserRequest) => {
  try {
    const response = await axios({
      method: "POST",
      url: API_ENDPOINTS.addUser,
      data: data,
    });
    return response;
  } catch (error) {
    console.error("Error in signup: ", error);
    throw error;
  }
};

export const loginUser = async (data: LoginUserRequest) => {
  try {
    const response = await axios({
      method: "POST",
      url: API_ENDPOINTS.loginUser,
      data: data,
    });
    return response;
  } catch (error) {
    console.error("Error in login: ", error);
    throw error;
  }
};
