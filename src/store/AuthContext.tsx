import { useState, useEffect, createContext } from "react";
import { signIn } from "../utils/http";
import { AuthContextType, LoginType } from "./types/AuthContextType";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({ children }) => {
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

      if (res.error || res.message) {
        alert(res.message);
        return false;
      }
    } catch (error) {
      console.log(error);
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
