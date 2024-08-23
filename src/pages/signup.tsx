import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Image from "next/image";
import S from "@/styles/login.module.css";
import axios from "@/pages/api/axios";
import { useEffect } from "react";

interface FormData {
  email: string;
  nickname: string;
  password: string;
  passwordConfirmation: string;
}
function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitted, errors },
    getValues,
  } = useForm<FormData>();
  const router = useRouter();

  async function postSignUp(data: FormData) {
    try {
      await axios.post("/auth/signUp", data);
      router.replace("/login");
    } catch (error) {
      alert("회원가입 실패");
      console.error(error);
      router.replace("/signup");
    }
  }
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) router.replace("/");
  }, [router]);
  return (
    <div className={S.container}>
      <div className={S.LogoImageWrapper}>
        <Image src="/images/logo/logo.png" fill alt="판다마켓 로고" />
      </div>
      <form noValidate className={S.formContainer} onSubmit={handleSubmit(postSignUp)}>
        <label htmlFor="email">이메일</label>
        <input
          id="email"
          className={S.inputBox}
          type="email"
          placeholder="이메일을 입력해주세요"
          {...register("email", {
            required: "이메일을 입력해주세요",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
              message: "잘못된 이메일 형식입니다",
            },
          })}
          aria-invalid={isSubmitted ? (errors.email ? "true" : "false") : undefined}
        />
        {errors.email && (
          <small role="alert" className={S.errorMessage}>
            {String(errors.email.message)}
          </small>
        )}
        <label htmlFor="nickname">닉네임</label>
        <input
          id="nickname"
          className={S.inputBox}
          type="text"
          placeholder="닉네임을 입력해주세요"
          {...register("nickname", {
            required: "닉네임을 입력해주세요",
          })}
          aria-invalid={isSubmitted ? (errors.nickname ? "true" : "false") : undefined}
        />
        {errors.nickname && (
          <small role="alert" className={S.errorMessage}>
            {String(errors.nickname.message)}
          </small>
        )}
        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          className={S.inputBox}
          type="password"
          placeholder="비밀번호를 입력해주세요"
          {...register("password", {
            required: "비밀번호를 입력해주세요",
            minLength: {
              value: 8,
              message: "비밀번호를 8자 이상 입력해주세요",
            },
          })}
          aria-invalid={isSubmitted ? (errors.password ? "true" : "false") : undefined}
        />
        {errors.password && (
          <small role="alert" className={S.errorMessage}>
            {String(errors.password.message)}
          </small>
        )}
        <label htmlFor="passwordConfirmation">비밀번호 확인</label>
        <input
          id="passwordConfirmation"
          className={S.inputBox}
          type="password"
          placeholder="비밀번호를 다시 한 번 입력해주세요"
          {...register("passwordConfirmation", {
            required: "비밀번호를 다시 한 번 입력해주세요",
            minLength: {
              value: 8,
              message: "비밀번호를 8자 이상 입력해주세요",
            },
            validate: {
              check: (val) => {
                if (getValues("password") !== val) {
                  return "비밀번호가 일치하지 않습니다.";
                }
              },
            },
          })}
          aria-invalid={isSubmitted ? (errors.passwordConfirmation ? "true" : "false") : undefined}
        />
        {errors.passwordConfirmation && (
          <small role="alert" className={S.errorMessage}>
            {String(errors.passwordConfirmation.message)}
          </small>
        )}
        <button type="submit" disabled={isSubmitting}>
          로그인
        </button>
      </form>
    </div>
  );
}

export default SignUp;
