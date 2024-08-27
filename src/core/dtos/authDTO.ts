export interface AuthSignIn {
  email: string;
  password: string;
}

export interface AuthSignUp extends AuthSignIn {
  nickname: string;
  passwordConfirmation: string;
}

export interface RefreshToken {
  refreshToken: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    email: string;
    image: string | null;
    nickname: string;
    updatedAt: string;
    createdAt: string;
  };
}

export interface RefreshTokenResponse {
  accessToken: string;
}
