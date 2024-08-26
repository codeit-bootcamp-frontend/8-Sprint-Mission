import style from "./Signup.module.css";
import googleicon from "../../images/icons/google_icon.png";
import kakaoicon from "../../images/icons/kakao_icon.png";
import propertyicon from "../../images/icons/PropertyVariant.png";
import mainLogo from "../../images/image/logo3x.png";
import { Link, useNavigate } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { postAuthSignUp } from "../../API/AuthAPI";

interface valuetype {
  email: string;
  nickname: string;
  password: string;
  passwordConfirmation: string;
}

const INITIAL_VALUES = {
  email: "",
  nickname: "",
  password: "",
  passwordConfirmation: "",
};

const SignUp = () => {
  const [value, setValue] = useState<valuetype>(INITIAL_VALUES);
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: postAuthSignUp,
    onSuccess: () => {
      setValue(INITIAL_VALUES);
      console.log("전송 성공");
      navigate("/login");
    },
    onError: (error) => {
      console.error("전송 실패:", error);
      if (axios.isAxiosError(error)) {
        console.error("axios error:", error.response?.data);
      }
    },
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValue((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data: valuetype = {
      email: value.email,
      nickname: value.nickname,
      password: value.password,
      passwordConfirmation: value.passwordConfirmation,
    };

    mutation.mutate(data);
  };

  return (
    <div>
      <header className={style.Signupheader}>
        <a href="/">
          <img src={mainLogo} alt="mainlogo" />
        </a>
      </header>
      <main className={style.SignupMain}>
        <form className={style.formsection} onSubmit={handleSubmit}>
          <div>
            <label className={style.loginLabel} htmlFor="signup-email">
              이메일
            </label>
            <input
              className={style.signupinput}
              id="signup-email"
              name="email"
              placeholder="이메일을 입력해주세요"
              onChange={handleInputChange}
              value={value.email}
            />
            <span id="email-error" className={style.errormessage}></span>
          </div>
          <div>
            <label className={style.loginLabel} htmlFor="signup-name">
              닉네임
            </label>
            <input
              className={style.signupinput}
              id="signup-name"
              name="nickname"
              placeholder="닉네임을 입력해주세요"
              onChange={handleInputChange}
              value={value.nickname}
            />
            <span id="name-error" className={style.errormessage}></span>
          </div>
          <div className={style.password}>
            <label className={style.loginLabel} htmlFor="signup-password">
              비밀번호
            </label>
            <input
              className={style.signupinput}
              id="signup-password"
              name="password"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              onChange={handleInputChange}
              value={value.password}
            />
            <span id="password-error" className={style.errormessage}></span>
            <button type="button" className={style.passwordicon}>
              <img src={propertyicon} alt="비밀번호 표시" />
            </button>
          </div>
          <div className={style.password}>
            <label className={style.loginLabel} htmlFor="signup-repassword">
              비밀번호 확인
            </label>
            <input
              className={style.signupinput}
              id="signup-repassword"
              name="passwordConfirmation"
              type="password"
              placeholder="비밀번호를 다시 한 번 입력해주세요"
              onChange={handleInputChange}
              value={value.passwordConfirmation}
            />
            <span id="repassword-error" className={style.errormessage}></span>
            <button type="button" className={style.repasswordicon}>
              <img src={propertyicon} alt="비밀번호 표시" />
            </button>
          </div>
          <button className={style.login} type="submit">
            회원가입
          </button>
        </form>
        <div className={style.easylogin}>
          간편 로그인하기
          <div className={style.easyloginicon}>
            <Link to="https://www.google.com/">
              <img src={googleicon} alt="google_icon" />
            </Link>
            <Link to="https://www.kakaocorp.com/page/">
              <img src={kakaoicon} alt="kakao_icon" />
            </Link>
          </div>
        </div>
        <div className={style.footer}>
          이미 회원이신가요? <Link to="/login">로그인</Link>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
