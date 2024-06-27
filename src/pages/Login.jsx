import React, { useEffect, useState } from "react";
import "../styles/signup.css";
import Auth from "../components/Auth";
import { validEmail, validPassword } from "../utils/valid";

function Signup() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userInfo;

  const getUserInfo = ({ target }) => {
    const { name, value } = target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const emailMessage = validEmail(email);
  const passwordMessage = validPassword(password);
  const isValid = emailMessage === "" && passwordMessage === "";

  return (
    <main>
      <Auth link="/login" submit="items" isValid={isValid}>
        <Auth.Email
          value={email}
          message={emailMessage}
          getUserInfo={getUserInfo}
        />

        <Auth.Password
          value={password}
          message={passwordMessage}
          getUserInfo={getUserInfo}
        />

        <Auth.Submit isValid={isValid}>회원가입</Auth.Submit>
      </Auth>
    </main>
  );
}

export default Signup;
