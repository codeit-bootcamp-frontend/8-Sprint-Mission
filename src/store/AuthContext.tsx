import { useState, useEffect, createContext } from "react";
import { signIn } from "../utils/http";

interface AuthCotextType {
  isLoggedIn: boolean;
  login: (data: { email: string; password: string }) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthCotextType | undefined>(undefined);

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = async (data) => {
    setIsLoggedIn(true);
    try {
      const res = await signIn(data);
      if (res.accessToken) {
        setIsLoggedIn(true);
        localStorage.setItem("token", res.accessToken);
        return true;
      }
      return false;
    } catch (error) {
      console.log(error.message);
      return false;
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  const authValue = {
    isLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
