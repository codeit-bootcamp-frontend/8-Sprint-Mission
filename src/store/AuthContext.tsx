import { useState, useEffect, createContext } from "react";
import { signIn, signUp, updateToken } from "../utils/http";
import {
  AuthContextType,
  LoginType,
  RegisterType,
} from "./types/AuthContextType";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState<string>("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    setUserId(localStorage.getItem("userId"));
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = async (data: LoginType) => {
    try {
      const res = await signIn(data);
      if (res.accessToken) {
        setIsLoggedIn(true);
        localStorage.setItem("userId", res.user.id);
        localStorage.setItem("token", res.accessToken);
        localStorage.setItem("refreshToken", res.refreshToken);
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
    localStorage.removeItem("refreshToken");
    setIsLoggedIn(false);
  };

  const refreshAccessToken = async () => {
    try {
      const refreshToken = localStorage.getItem("refreshToken");
      if (!refreshToken) return;
      const response = await updateToken(refreshToken);
      if (response.accessToken) {
        setIsLoggedIn(true);
        localStorage.setItem("token", response.accessToken);
        return true;
      }
    } catch (error) {
      logoutHandler();
      return false;
    }
  };

  useEffect(() => {
    const tokenTime = 9 * 60 * 1000;
    refreshAccessToken();
    const interval = setInterval(() => {
      refreshAccessToken();
    }, tokenTime);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const authValue = {
    userId,
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
