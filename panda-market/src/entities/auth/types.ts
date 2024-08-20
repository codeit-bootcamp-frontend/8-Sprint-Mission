export interface UserInfo {
  id: number;
  nickname: string;
  image?: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface SignInParams {
  email: string;
  password: string;
}

export interface SignUpParams extends SignInParams {
  nickname: string;
  passwordConfirmation: string;
}

export interface SignResponse {
  user: UserInfo;
  accessToken: string;
  refreshToken: string;
}

export type ErrorMessageDetail = {
  message: string;
};

export interface SignError {
  message: string;
  details: {
    email?: ErrorMessageDetail;
    nickname?: ErrorMessageDetail;
    passwordConfirm?: ErrorMessageDetail;
  };
}
