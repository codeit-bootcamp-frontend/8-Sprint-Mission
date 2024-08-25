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
  login: (data: { email: string; password: string }) => Promise<boolean>;
  logout: () => void;
}

export type { LoginType, RegisterType, AuthContextType };
