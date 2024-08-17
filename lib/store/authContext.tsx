import { ReactNode, createContext, useState, useEffect } from 'react';
import axios from '@/lib/axios';

interface Props {
  children: ReactNode;
}

interface AuthContextProps {
  token: string;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider = ({ children }: Props) => {
  const [token, setToken] = useState<string>('');
  const user = {
    email: process.env.NEXT_PUBLIC_USER_EMAIL,
    password: process.env.NEXT_PUBLIC_USER_PASSWORD,
  };
  const getLogin = async () => {
    try {
      const res = await axios.post(`/auth/signIn`, user);
      setToken(res.data.accessToken);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getLogin();
  }, []);

  return (
    <AuthContext.Provider value={{ token }}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
