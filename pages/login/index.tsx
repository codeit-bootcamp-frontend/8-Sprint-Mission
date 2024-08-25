import React, { useEffect } from "react";
import styles from "./login.module.css";
import Image from "next/image";
import logo from "@/public/images/logo/fullLogo.svg";
import googleIcon from "@/public/images/icons/googleIcon.svg";
import kakaoIcon from "@/public/images/icons/kakaoIcon.svg";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { AuthResponse, LoginUserRequest } from "@/types/types";
import { useRouter } from "next/router";
import { loginUser } from "@/lib/authApi";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, isDirty, isValid },
    watch,
    trigger,
  } = useForm<LoginUserRequest>({
    mode: "onChange",
  });
  const router = useRouter();
  const email = watch("email");
  const password = watch("password");

  const onSubmit = async (data: LoginUserRequest) => {
    try {
      const res: { data: AuthResponse } = await loginUser(data);
      console.log(res);
      const accessToken = res.data.accessToken;
      localStorage.setItem("accessToken", accessToken);
      router.replace("/");
    } catch (error) {
      alert("로그인 실패");
      router.replace("/login");
    }
  };
  useEffect(() => {
    const getAccessToken = localStorage.getItem("accessToken");
    if (getAccessToken) router.replace("/");
  }, [router]);

  useEffect(() => {
    trigger();
  }, [email, password, trigger]);
  return (
    <div className={styles.login}>
      <div className={styles.logo}>
        <Image src={logo} alt="logo" width={350} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.loginInputBox}>
          <label htmlFor="loginEmail">이메일</label>
          <input
            className={styles.loginInput}
            id="loginEmail"
            type="email"
            placeholder="이메일을 입력해주세요"
            {...register("email", {
              required: {
                value: true,
                message: "이메일을 입력해주세요.",
              },
              pattern: {
                value:
                  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
                message: "유효한 이메일 형식을 입력해주세요.",
              },
            })}
          />
          {errors.email && (
            <small className={styles.errorMessage}>
              {errors.email.message}
            </small>
          )}
        </div>
        <div className={styles.loginInputBox}>
          <label htmlFor="loginPassword">비밀번호</label>

          <input
            className={styles.loginInput}
            id="loginPassword"
            type="password"
            autoComplete="on"
            placeholder="비밀번호를 입력해주세요"
            {...register("password", {
              required: {
                value: true,
                message: "비밀번호를 입력해주세요.",
              },
              minLength: {
                value: 8,
                message: "비밀번호를 8자 이상 입력해주세요.",
              },
            })}
          />
          {errors.password && (
            <small className={styles.errorMessage}>
              {errors.password.message}
            </small>
          )}
        </div>

        <button
          type="submit"
          className={styles.loginBtn}
          disabled={!isDirty || !isValid || isSubmitting}
        >
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
