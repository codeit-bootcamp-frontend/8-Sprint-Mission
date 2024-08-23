export type SignInResponse = {
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    email: string;
    image: string | null;
    nickname: string;
    updatedAt: Date;
    createdAt: Date;
  };
};
