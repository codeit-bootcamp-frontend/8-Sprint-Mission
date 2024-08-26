import axiosInstance from "./instance";

export interface LogInUserProps {
  email: string;
  password: string;
}

export interface SignUpUserProps extends LogInUserProps {
  nickname: string;
  passwordConfirmation: string;
}

export async function signUpUser({
  email,
  nickname,
  password,
  passwordConfirmation,
}: SignUpUserProps) {
  try {
    const res = await axiosInstance.post("/auth/signUp", {
      email,
      nickname,
      password,
      passwordConfirmation,
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

export async function logInUser({ email, password }: LogInUserProps) {
  try {
    const res = await axiosInstance.post("/auth/signIn", { email, password });
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
