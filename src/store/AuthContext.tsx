import { useState, useEffect, useContext, createContext } from "react";
import { updateToken } from "../utils/http";
import { AuthContextType } from "./types/AuthContextType";

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
    setIsLoggedIn,
    setErrorMessage,
    errorMessage,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Context안에 존재해야 합니다.");
  }
  return context;
};

export default AuthContext;
