import { API_PATH } from 'core/config/api/path';
import http from './APIHandler';
import { UserInfo } from './types';

export interface SignInDto {
  email: string;
  password: string;
}

export const signIn = async ({ email, password }: SignInDto) => {
  return await http.post<SignInDto, UserInfo>(API_PATH.AUTH.signIn, {
    email,
    password,
  });
};

export interface SignUpDto extends SignInDto {
  nickname: string;
  passwordConfirmation: string;
}

export const signUp = async ({
  email,
  nickname,
  password,
  passwordConfirmation,
}: SignUpDto) => {
  return await http.post<SignUpDto, UserInfo>(API_PATH.AUTH.signUp, {
    email,
    nickname,
    password,
    passwordConfirmation,
  });
};
