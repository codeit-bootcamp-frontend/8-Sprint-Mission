import React, { useEffect } from "react";
import Link from "next/link";
import styles from "./signup.module.css"; // CSS 모듈 불러오기
import Image from "next/image";
import googleIcon from "@/public/images/icons/googleIcon.svg";
import kakaoIcon from "@/public/images/icons/kakaoIcon.svg";
import logo from "@/public/images/logo/fullLogo.svg";
import { useForm } from "react-hook-form";
import { AddUserRequest } from "@/types/types";
import { signupUser } from "@/lib/authApi";
import { useRouter } from "next/router";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, isDirty, isValid },
    watch,
    trigger,
  } = useForm<AddUserRequest>({
    mode: "onChange",
  });
  const router = useRouter();
  const email = watch("email");
  const nickname = watch("nickname");
  const password = watch("password");
  const passwordConfirmation = watch("passwordConfirmation");

  const onSubmit = async (data: AddUserRequest) => {
    try {
      await signupUser(data);
      router.push("/login");
    } catch (error) {
      alert("이메일 중복");
    }
  };
  const isPasswordMismatch = password !== passwordConfirmation;

  useEffect(() => {
    trigger();
  }, [email, nickname, password, passwordConfirmation, trigger]);
  return (
    <div className={styles.signup}>
      <div className={styles.logo}>
        <Image src={logo} alt="logo" width={350} />
      </div>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.signupInputBox}>
          <label htmlFor="signupEmail">이메일</label>
          <input
            className={styles.signupInput}
            id="signupEmail"
            type="email"
            placeholder="이메일을 입력해주세요."
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
        <div className={styles.signupInputBox}>
          <label htmlFor="nickname">닉네임</label>
          <input
            className={styles.signupInput}
            id="nickname"
            type="text"
            placeholder="닉네임을 입력해주세요."
            {...register("nickname", {
              required: {
                value: true,
                message: "닉네임을 입력해주세요.",
              },
            })}
          />
          {errors.nickname && (
            <small className={styles.errorMessage}>
              {errors.nickname.message}
            </small>
          )}
        </div>
        <div className={styles.signupInputBox}>
          <label htmlFor="signupPassword">비밀번호</label>

          <input
            className={styles.signupInput}
            id="signupPassword"
            type="password"
            placeholder="비밀번호를 입력해주세요."
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
        <div className={styles.signupInputBox}>
          <label htmlFor="signupPasswordConfirm">비밀번호 확인</label>

          <input
            className={styles.signupInput}
            id="signupPasswordConfirm"
            type="password"
            placeholder="비밀번호를 다시 한 번 입력해주세요"
            {...register("passwordConfirmation")}
          />
          {isPasswordMismatch && (
            <small className={styles.errorMessage}>
              비밀번호가 일치하지 않습니다.
            </small>
          )}
        </div>

        <button
          type="submit"
          className={styles.signupBtn}
          disabled={!isDirty || !isValid || isSubmitting || isPasswordMismatch}
        >
          회원가입
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
      <div className={styles.login}>
        <span>이미 회원이신가요?</span>
        <Link href="/login">로그인</Link>
      </div>
    </div>
  );
};

export default Signup;
