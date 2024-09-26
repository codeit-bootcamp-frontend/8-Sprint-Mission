import { useState, useEffect, createContext } from "react";
import { signIn, signUp } from "../utils/http";
import {
  AuthContextType,
  LoginType,
  RegisterType,
} from "./types/AuthContextType";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = async (data: LoginType) => {
    try {
      const res = await signIn(data);
      if (res.accessToken) {
        setIsLoggedIn(true);
        localStorage.setItem("token", res.accessToken);
        return true;
      }
    } catch (error) {
      setErrorMessage(error.message);
      return false;
    }
  };

  const registerHandler = async (data: RegisterType) => {
    try {
      const res = await signUp(data);
      if (res) {
        return true;
      }
    } catch (error) {
      setErrorMessage(error.message);
      return false;
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  const authValue = {
    isLoggedIn,
    errorMessage,
    register: registerHandler,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
