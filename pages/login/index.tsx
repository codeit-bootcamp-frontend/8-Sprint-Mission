import React from "react";
import styles from "./login.module.css";
import Image from "next/image";
import logo from "@/public/images/logo/fullLogo.svg";
import googleIcon from "@/public/images/icons/googleIcon.svg";
import kakaoIcon from "@/public/images/icons/kakaoIcon.svg";
import Link from "next/link";

const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.logo}>
        <Image src={logo} alt="logo" width={350} />
      </div>
      <form>
        <div className={styles.loginInputBox}>
          <label htmlFor="loginEmail">이메일</label>
          <input
            className={styles.loginInput}
            id="loginEmail"
            type="email"
            placeholder="이메일을 입력해주세요"
          />
        </div>
        <div className={styles.loginInputBox}>
          <label htmlFor="loginPassword">비밀번호</label>
          <div className={styles.loginPasswordBox}>
            <input
              className={styles.loginInput}
              id="loginPassword"
              type="password"
              autoComplete="on"
              placeholder="비밀번호를 입력해주세요"
            />
            <button
              type="button"
              className={styles.passwordVisibleToggle}
            ></button>
          </div>
        </div>

        <button type="submit" className={styles.loginBtn}>
          로그인
        </button>
      </form>
      <div className={styles.oauthLogin}>
        <span>간편 로그인하기</span>
        <div className={styles.oauthLoginIcons}>
          <a className={styles.oauthLoginIcon} href="https://www.google.co.kr/">
            <Image src={googleIcon} alt="google" />
          </a>
          <a
            className={styles.oauthLoginIcon}
            href="https://www.kakaocorp.com/page/"
          >
            <Image src={kakaoIcon} alt="kakao" />
          </a>
        </div>
      </div>
      <div className={styles.signup}>
        <span>판다마켓이 처음이신가요?</span>
        <Link href="/signup">회원가입</Link>
      </div>
    </div>
  );
};

export default Login;
