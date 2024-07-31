import { ChangeEvent, FormEvent, ReactNode, useState } from "react";
import "../styles/login.css";
import "../styles/signup.css";
import btnOffImg from "../assets/btn_visibility_off_24px.png";
import btnOnImg from "../assets/btn_visibility_on_24px.png";
import googleLogoImg from "../assets/google_logo.png";
import kakaoLogoImg from "../assets/kakao_logo.png";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";

interface Props {
  value: string;
  message: string;
  getUserInfo: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Email = ({ value, message, getUserInfo }: Props) => {
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  const focusoutAuthInput = () => {
    setIsMessageVisible(message !== "");
  };

  return (
    <div className="auth__el">
      <label className="auth__label" htmlFor="email">
        이메일
      </label>
      <input
        className={`auth__input ${isMessageVisible ? "auth__invalid" : ""}`}
        type="email"
        name="email"
        id="email"
        placeholder="이메일을 입력해주세요"
        required
        value={value}
        onBlur={focusoutAuthInput}
        onChange={getUserInfo}
      />
      {isMessageVisible && <span className="auth__message">{message}</span>}
    </div>
  );
};

const NickName = ({ value, message, getUserInfo }: Props) => {
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  const focusoutAuthInput = () => {
    setIsMessageVisible(message !== "");
  };

  return (
    <div className="auth__el">
      <label className="auth__label" htmlFor="nickname">
        닉네임
      </label>
      <input
        className={`auth__input ${isMessageVisible ? "auth__invalid" : ""}`}
        type="nickname"
        name="nickname"
        id="nickname"
        placeholder="닉네임을 입력해주세요"
        required
        value={value}
        onBlur={focusoutAuthInput}
        onChange={getUserInfo}
      />
      {isMessageVisible && <span className="auth__message">{message}</span>}
    </div>
  );
};

const Password = ({ value, message, getUserInfo }: Props) => {
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const [type, setType] = useState("password");

  const focusoutAuthInput = () => {
    setIsMessageVisible(message !== "");
  };

  const handleValueVisible = () => {
    setType((prev) => {
      if (prev === "password") return "text";
      return "password";
    });
  };

  return (
    <div className="auth__el">
      {type === "password" && (
        <button
          className="auth__toggle-btn"
          type="button"
          onClick={handleValueVisible}
        >
          <img src={btnOffImg} alt="visibility off" width="24" height="24" />
        </button>
      )}
      {type === "text" && (
        <button
          className="auth__toggle-btn"
          type="button"
          onClick={handleValueVisible}
        >
          <img src={btnOnImg} alt="visibility on" width="24" height="24" />
        </button>
      )}
      <label className="auth__label" htmlFor="password">
        비밀번호
      </label>
      <input
        className={`auth__input ${isMessageVisible ? "auth__invalid" : ""}`}
        type={type}
        name="password"
        id="password"
        minLength={8}
        placeholder="비밀번호를 입력해주세요"
        required
        value={value}
        onBlur={focusoutAuthInput}
        onChange={getUserInfo}
      />
      {isMessageVisible && <span className="auth__message">{message}</span>}
    </div>
  );
};

const PasswordConfirm = ({ value, message, getUserInfo }: Props) => {
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const [type, setType] = useState("password");

  const focusoutAuthInput = () => {
    setIsMessageVisible(message !== "");
  };

  const handleValueVisible = () => {
    setType((prev) => {
      if (prev === "password") return "text";
      return "password";
    });
  };

  return (
    <div className="auth__el">
      {type === "password" && (
        <button
          className="auth__toggle-btn"
          type="button"
          onClick={handleValueVisible}
        >
          <img src={btnOffImg} alt="visibility off" width="24" height="24" />
        </button>
      )}
      {type === "text" && (
        <button
          className="auth__toggle-btn"
          type="button"
          onClick={handleValueVisible}
        >
          <img src={btnOnImg} alt="visibility on" width="24" height="24" />
        </button>
      )}
      <label className="auth__label" htmlFor="confirm_password">
        비밀번호 확인
      </label>
      <input
        className={`auth__input ${isMessageVisible ? "auth__invalid" : ""}`}
        id="confirm-password"
        name="passwordConfirm"
        type={type}
        placeholder="비밀번호를 다시 입력해주세요"
        required
        value={value}
        onBlur={focusoutAuthInput}
        onChange={getUserInfo}
      />
      {isMessageVisible && <span className="auth__message">{message}</span>}
    </div>
  );
};

interface SubmitProps {
  isValid: boolean;
  children: ReactNode;
}

const Submit = ({ isValid, children }: SubmitProps) => {
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

interface AuthProps extends SubmitProps {
  link: string;
  submit: string;
}

function Auth({ children, link, submit, isValid }: AuthProps) {
  const navigate = useNavigate();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
Auth.PasswordConfirm = PasswordConfirm;
Auth.Submit = Submit;
export default Auth;
