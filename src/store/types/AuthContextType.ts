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

interface AuthContextType {
  isLoggedIn: boolean;
  errorMessage: string;
  register: (data: RegisterType) => Promise<boolean>;
  login: (data: LoginType) => Promise<boolean>;
  logout: () => void;
}

export type { LoginType, RegisterType, AuthContextType };
