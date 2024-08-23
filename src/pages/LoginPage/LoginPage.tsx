import style from "./LoginPage.module.css";
import googleicon from "../../images/icons/google_icon.png";
import kakaoicon from "../../images/icons/kakao_icon.png";
import propertyicon from "../../images/icons/PropertyVariant.png";
import mainLogo from "../../images/image/logo3x.png";
import { Link, useNavigate } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { postAuthSignIn } from "../../API/AuthAPI";
import axios from "axios";

interface valuetype {
  email: string;
  nickname?: string;
  password: string;
  repassword?: string;
}

const INITIAL_VALUES = {
  email: "",
  password: "",
};

function LoginPage() {
  const [value, setValue] = useState<valuetype>(INITIAL_VALUES);
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: postAuthSignIn,
    onSuccess: (data) => {
      const accessToken = data.accessToken;
      if (accessToken) {
        localStorage.setItem("accessToken", accessToken);
        console.log("Access Token 로컬스토리지에 저장");
      } //

      setValue(INITIAL_VALUES);
      console.log("전송 성공");
      navigate("/");
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
      password: value.password,
    };

    mutation.mutate(data);
  };

  const isLogIn = localStorage.getItem("accessToken");

  return (
    <div>
      <header className={style.Loginheader}>
        <Link to="/">
          <img src={mainLogo} alt="mainlogo" />
        </Link>
      </header>
      <main className={style.LoginMain}>
        <form className={style.LoginFrom} onSubmit={handleSubmit}>
          <div className={style.eamil}>
            <label className={style.loginLabel} htmlFor="signup-email">
              이메일
            </label>
            <input
              id="signup-email"
              className={style.signupemail}
              name="email"
              placeholder="이메일을 입력해주세요"
              onChange={handleInputChange}
            />
            <span id="email-error" className={style.errormessage}></span>
          </div>
          <div className={style.password}>
            <label className={style.loginLabel} htmlFor="signup-password">
              비밀번호
            </label>
            <input
              id="signup-password"
              className={style.signuppassword}
              name="password"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              onChange={handleInputChange}
            />
            <span id="password-error" className={style.errormessage}></span>
            <button type="button" className={style.passwordicon}>
              <img src={propertyicon} alt="비밀번호 표시" />
            </button>
          </div>
          <button className={style.login} type="submit">
            로그인
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
          판다마켓이 처음이신가요?
          {isLogIn ? (
            <Link to="/">회원가입</Link>
          ) : (
            <Link to="/signup">회원가입</Link>
          )}
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
