export interface ErrorMessage {
  message: string;
  details?: {
    email?: {
      message: string;
    };
    nickname?: {
      message: string;
    };
    password?: {
      message: string;
    };
    passwordConfirmation?: {
      message: string;
    };
  };
}

export interface RefreshTokenDto {
  refreshToken: string;
}
export interface RefreshTokenResponse {
  accessToken: string;
}

export interface UserInfo {
  accessToken: string;
  refreshToken: string;
  user: {
    id: number;
    email: string;
    image?: string;
    nickname: string;
    updatedAt: string;
    createdAt: string;
  };
}
