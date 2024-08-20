import { ReactNode, createContext, useState, useEffect } from 'react';
import axios from '@/lib/axios';

interface Props {
  children: ReactNode;
}

interface AuthContextProps {
  isLoggedIn: boolean;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider = ({ children }: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [token, setToken] = useState<string>('');
  const user = {
    email: process.env.NEXT_PUBLIC_USER_EMAIL,
    password: process.env.NEXT_PUBLIC_USER_PASSWORD,
  };
  const getLogin = async () => {
    try {
      const res = await axios.post(`/auth/signIn`, user);
      setIsLoggedIn(true);
      setToken(res.data.accessToken);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  if (isLoggedIn) {
    localStorage.setItem('token', token);
  }

  useEffect(() => {
    getLogin();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
