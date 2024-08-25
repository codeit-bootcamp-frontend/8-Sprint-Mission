import {
  AddUserRequest,
  AddUserResponse,
  SignInUserResponse,
} from '@type/AuthTypes';
import { axiosInstance } from './axios';
import { SignInUserRequest } from '../../type/AuthTypes';

export const addUser = async ({ ...params }: AddUserRequest) => {
  if (!params) return;
  try {
    const response = await axiosInstance<AddUserResponse>({
      method: 'POST',
      url: '/auth/signUp',
      data: params,
    });
    return response;
  } catch (error) {
    console.error('error: ', error);
    throw error;
  }
};

export const signInUser = async ({ ...params }: SignInUserRequest) => {
  if (!params) return;
  try {
    const response = await axiosInstance<SignInUserResponse>({
      method: 'POST',
      url: '/auth/signIn',
      data: params,
    });
    return response;
  } catch (error) {
    console.error('error: ', error);
    throw error;
  }
};
