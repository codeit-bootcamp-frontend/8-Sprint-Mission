import React, { useEffect, useState } from "react";
import "../styles/signup.css";
import Auth from "../components/Auth";
import {
  validEmail,
  validNickname,
  validPassword,
  validPasswordConfirm,
} from "../utils/valid";

function Signup() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    nickname: "",
    password: "",
    passwordConfirm: "",
  });
  const { email, nickname, password, passwordConfirm } = userInfo;

  const getUserInfo = ({ target }) => {
    const { name, value } = target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const emailMessage = validEmail(email);
  const nicknameMessage = validNickname(nickname);
  const passwordMessage = validPassword(password);
  const passwordConfirmMessage = validPasswordConfirm(
    password,
    passwordConfirm
  );
  const isValid =
    emailMessage === "" &&
    nicknameMessage === "" &&
    passwordMessage === "" &&
    passwordConfirmMessage === "";

  return (
    <main>
      <Auth link="/login" submit="items" isValid={isValid}>
        <Auth.Email
          value={email}
          message={emailMessage}
          getUserInfo={getUserInfo}
        />
        <Auth.NickName
          value={nickname}
          message={nicknameMessage}
          getUserInfo={getUserInfo}
        />
        <Auth.Password
          value={password}
          message={passwordMessage}
          getUserInfo={getUserInfo}
        />
        <Auth.PasswordConfirm
          value={passwordConfirm}
          message={passwordConfirmMessage}
          getUserInfo={getUserInfo}
        />
        <Auth.Submit isValid={isValid}>회원가입</Auth.Submit>
      </Auth>
    </main>
  );
}

export default Signup;
