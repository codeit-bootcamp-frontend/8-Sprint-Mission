import { AddUserRequest, AddUserResponse } from '@type/AuthTypes';
import { axiosInstance } from './axios';

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
