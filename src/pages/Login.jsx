import React, { useEffect, useState } from "react";
import "../styles/login.css";
import Auth from "../components/Auth";

//function toggleButtonState() {
//  const spanEl = document.querySelectorAll(".auth__invalid");
//  const hasNotInvalid = [...authInputs].every((input) => input.checkValidity());

//  if (spanEl.length === 0 && hasNotInvalid)
//    submitButton.classList.add("auth__submit-btn--active");
//  else submitButton.classList.remove("auth__submit-btn--active");
//}

function Login() {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(false);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(emailValid && passwordValid);
  }, [emailValid, passwordValid]);

  return (
    <main>
      <Auth link="/signup" submit="/items" isValid={isValid}>
        <Auth.Email
          value={email}
          setValue={setEmail}
          isValid={emailValid}
          setIsValid={setEmailValid}
        />
        <Auth.Password
          value={password}
          setValue={setPassword}
          isValid={passwordValid}
          setIsValid={setPasswordValid}
        />
        <Auth.Submit isValid={isValid}>로그인</Auth.Submit>
      </Auth>
    </main>
  );
}

export default Login;
