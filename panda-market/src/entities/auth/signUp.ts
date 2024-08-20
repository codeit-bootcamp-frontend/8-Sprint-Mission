import { API_PATH } from '@/f_shared/config';
import { instance } from '../instance';
import { SignError, SignResponse, SignUpParams } from './types';

export const signUp = async (data: SignUpParams) => {
  return await instance.post<SignResponse>(
    API_PATH.authPath.signUp,
    JSON.stringify(data),
  );
  // .then((res) => {
  //   switch (res.status) {
  //     case 201:
  //       return res.data;
  //     default:
  //       Promise.reject<SignError>(res.data);
  //   }
  // })
  // .catch((err: AxiosError<SignError>) => {
  //   switch (err.response?.status) {
  //     case 400:
  //       const errorMessage = [];
  //       if (err.response?.data.details.email) {
  //         errorMessage.push(err.response?.data.details.email);
  //       }
  //       if (err.response?.data.details.nickname) {
  //         errorMessage.push(err.response?.data.details.nickname);
  //       }
  //       if (err.response?.data.details.passwordConfirm) {
  //         errorMessage.push(err.response?.data.details.passwordConfirm);
  //       }

  //       throw new Error(
  //         `${err.response?.data.message}\n${errorMessage.join('\n')}`,
  //       );

  //     default:
  //       throw new Error('알 수 없는 에러입니다. 요청 값을 확인해주세요');
  //   }
  // });
};
