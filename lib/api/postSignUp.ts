import { AxiosResponse } from 'axios';
import instance from '.';

type Body = {
  email: string;
  nickname: string;
  password: string;
  passwordCheck: string;
};

type PostSignUpError<T extends keyof Body> = {
  message: string;
  details: {
    [K in T]: {
      message: string;
    };
  };
};

async function postSignUp({
  email,
  nickname,
  password,
  passwordCheck: passwordConfirmation,
}: Body) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  await instance.post<any, AxiosResponse<any, PostSignUpError<keyof Body>>>(
    '/auth/signUp',
    {
      email,
      nickname,
      password,
      passwordConfirmation,
    }
  );
}

export default postSignUp;
