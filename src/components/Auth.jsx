import React, { useEffect, useState } from "react";
import "../styles/login.css";
import "../styles/signup.css";
import btnOffImg from "../assets/btn_visibility_off_24px.png";
import btnOnImg from "../assets/btn_visibility_on_24px.png";
import googleLogoImg from "../assets/google_logo.png";
import kakaoLogoImg from "../assets/kakao_logo.png";
import Logo from "./Logo";
import { validEmail, validNickname, validPassword } from "../utils/valid";
import { useNavigate } from "react-router-dom";

const Email = ({ value, setValue, isValid, setIsValid }) => {
  const [message, setMessage] = useState("");

  const focusoutAuthInput = ({ target }) => {
    setMessage(validEmail(target));
    setIsValid(validEmail(target) === "" && value !== "");
  };

  return (
    <div className="auth__el">
      <label className="auth__label" htmlFor="email">
        이메일
      </label>
      <input
        className={`auth__input ${
          !isValid && message !== "" ? "auth__invalid" : ""
        }`}
        type="email"
        id="email"
        placeholder="이메일을 입력해주세요"
        required
        value={value}
        onBlur={focusoutAuthInput}
        onChange={({ target }) => setValue(target.value)}
      />
      <span
        className={isValid ? "hidden" : ""}
        style={{
          padding: "8px 16px 0px",
          color: "#f74747",
        }}
      >
        {message}
      </span>
    </div>
  );
};

const NickName = ({ isValid, setIsValid }) => {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");

  const focusoutAuthInput = ({ target }) => {
    setMessage(validNickname(target));
    setIsValid(validNickname(target) === "" && value !== "");
  };

  return (
    <div className="auth__el">
      <label className="auth__label" htmlFor="nickname">
        닉네임
      </label>
      <input
        className={`auth__input ${
          !isValid && message !== "" ? "auth__invalid" : ""
        }`}
        type="text"
        id="nickname"
        placeholder="닉네임을 입력해주세요"
        required
        value={value}
        onBlur={focusoutAuthInput}
        onChange={({ target }) => setValue(target.value)}
      />
      <span
        className={isValid ? "hidden" : ""}
        style={{
          padding: "8px 16px 0px",
          color: "#f74747",
        }}
      >
        {message}
      </span>
    </div>
  );
};

const Password = ({ isValid, setIsValid }) => {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");

  const focusoutAuthInput = ({ target }) => {
    setMessage(validPassword(target));
    setIsValid(validPassword(target) === "" && value !== "");
  };

  const keyupCheckPasswordSame = ({ target }) => {};

  return (
    <div className="auth__el">
      <button className="auth__toggle-btn" type="button">
        <img src={btnOffImg} alt="visibility off" width="24" height="24" />
      </button>
      <button
        className="auth__toggle-btn auth__toggle-btn--visible"
        type="button"
      >
        <img src={btnOnImg} alt="visibility on" width="24" height="24" />
      </button>
      <label className="auth__label" htmlFor="password">
        비밀번호
      </label>
      <input
        className={`auth__input ${
          !isValid && message !== "" ? "auth__invalid" : ""
        }`}
        id="password"
        type="password"
        minLength="8"
        placeholder="비밀번호를 입력해주세요"
        required
        value={value}
        onBlur={focusoutAuthInput}
        onChange={({ target }) => setValue(target.value)}
        onKeyUp={keyupCheckPasswordSame}
      />
      <span
        className={isValid ? "hidden" : ""}
        style={{
          padding: "8px 16px 0px",
          color: "#f74747",
        }}
      >
        {message}
      </span>
    </div>
  );
};

const ConfirmPassword = ({ isValid }) => {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage(isValid ? "" : "비밀번호가 일치하지 않습니다..");
  }, [isValid]);

  return (
    <div className="auth__el">
      <button className="auth__toggle-btn" type="button">
        <img src={btnOffImg} alt="visibility off" width="24" height="24" />
      </button>
      <button
        className="auth__toggle-btn auth__toggle-btn--visible"
        type="button"
      >
        <img src={btnOnImg} alt="visibility on" width="24" height="24" />
      </button>
      <label className="auth__label" htmlFor="login-confirm_password">
        비밀번호 확인
      </label>
      <input
        className={`auth__input ${
          !isValid && message !== "" ? "auth__invalid" : ""
        }`}
        id="confirm-password"
        type="password"
        minLength="8"
        placeholder="비밀번호를 다시 입력해주세요"
        required
        value={value}
        onChange={({ target }) => setValue(target.value)}
      />
      <span
        className={isValid ? "hidden" : ""}
        style={{
          padding: "8px 16px 0px",
          color: "#f74747",
        }}
      >
        {message}
      </span>
    </div>
  );
};

const Submit = ({ isValid, children }) => {
  return (
    <button
      className={`auth__submit-btn ${
        isValid ? "auth__submit-btn--active" : ""
      }`}
      type="submit"
    >
      {children}
    </button>
  );
};

function Auth({ children, link, submit, isValid }) {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) navigate(submit, { state: "submit" });
  };

  return (
    <section className="auth">
      <Logo />
      <form className="auth__form" method="get" onSubmit={handleSubmit}>
        {children}
      </form>
      <div className="auth__easy">
        <span>간편 로그인하기</span>
        <div className="auth__easy-login">
          <a href="https://www.google.com/">
            <img
              src={googleLogoImg}
              alt="google login"
              width="42"
              height="42"
            />
          </a>
          <a href="https://www.kakaocorp.com/page/">
            <img src={kakaoLogoImg} alt="kakao login" width="42" height="42" />
          </a>
        </div>
      </div>
      <p className="auth__question">
        {link === "login" ? "이미 회원이신가요? " : "판다마켓이 처음이신가요? "}
        <a href={link}>{link === "/login" ? "로그인" : "회원가입"}</a>
      </p>
    </section>
  );
}

Auth.Email = Email;
Auth.NickName = NickName;
Auth.Password = Password;
Auth.ConfirmPassword = ConfirmPassword;
Auth.Submit = Submit;
export default Auth;
