interface LoginType {
  email: string;
  password: string;
}

interface RegisterType {
  email: string;
  nickname: string;
  password: string;
  passwordCheck: string;
}

interface LoginResponseReturnType {
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    email: string;
    image: null;
    nickname: string;
    updatedAt: Date;
    createdAt: Date;
  };
}

interface AuthContextType {
  userId: string;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  errorMessage: string;
  logout: () => void;
}

export type {
  LoginType,
  RegisterType,
  AuthContextType,
  LoginResponseReturnType,
};
