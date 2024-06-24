import { useLocation } from "react-router";
import { useState } from "react";

import "../assets/styles/login.css";
import "../assets/styles/sign-up.css";

import AuthContainer from "../components/auth/AuthContainer";
import AuthHeader from "../components/auth/AuthHeader";

function Auth() {
  const { state } = useLocation();
  const [isLogin, setIsLogin] = useState(state.isLogin);

  const authPageHandle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      <AuthHeader />
      <AuthContainer isLogin={isLogin} onClickAuthHandle={authPageHandle} />
    </>
  );
}

export default Auth;
