import React, { useEffect, useState } from "react";
import "../styles/signup.css";
import Auth from "../components/Auth";

function Signup() {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [nickname, setNickname] = useState("");
  const [nicknameValid, setNicknameValid] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setConfirmPasswordValid(password === confirmPassword);
  }, [password, confirmPassword]);

  useEffect(() => {
    setIsValid(
      emailValid && nicknameValid && passwordValid && confirmPasswordValid
    );
  }, [emailValid, nicknameValid, passwordValid, confirmPasswordValid]);

  return (
    <main>
      <Auth link="/login" submit="items" isValid={isValid}>
        <Auth.Email
          value={email}
          setValue={setEmail}
          isValid={emailValid}
          setIsValid={setEmailValid}
        />
        <Auth.NickName
          value={nickname}
          setValue={setNickname}
          isValid={nicknameValid}
          setIsValid={setNicknameValid}
        />
        <Auth.Password
          value={password}
          setValue={setPassword}
          isValid={passwordValid}
          setIsValid={setPasswordValid}
        />
        <Auth.ConfirmPassword
          value={confirmPassword}
          setValue={setConfirmPassword}
          isValid={confirmPasswordValid}
        />
        <Auth.Submit isValid={isValid}>회원가입</Auth.Submit>
      </Auth>
    </main>
  );
}

export default Signup;
