import axios from "@/lib/axios";

interface SignInData {
  email: string;
  password: string;
}

interface SignUpData extends SignInData {
  passwordConfirmation: string;
  nickname: string;
}

interface ResponseData {
  accessToken: string;
  refreshToken: string;
}

export const postSignUp = async (signUpData: SignUpData) => {
  try {
    await axios.post("/auth/signUp", signUpData);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const postSignIn = async (signInData: SignInData) => {
  try {
    const res = await axios.post("/auth/signIn", signInData);
    return res.data;
  } catch (err) {
    return false;
  }
};
