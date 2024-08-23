import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Image from "next/image";
import S from "@/styles/login.module.css";
import axios from "@/pages/api/axios";
import { useEffect } from "react";

interface FormData {
  email: string;
  password: string;
}
function Login() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitted, errors },
  } = useForm<FormData>();
  const router = useRouter();

  async function getAccessToken(data: FormData) {
    try {
      const res = await axios.post("/auth/signIn", data);
      const token = res.data.accessToken;
      localStorage.setItem("accessToken", token);
      router.replace("/");
    } catch (error) {
      alert("토큰 가져오기 실패");
      console.error(error);
      router.replace("/login");
    }
  }
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) router.replace("/");
  }, [router]);

  return (
    <div className={S.container}>
      <div className={S.LogoImageWrapper}>
        <Image src="/images/logo/logo.png" fill alt="판다마켓 로고" priority />
      </div>
      <form noValidate className={S.formContainer} onSubmit={handleSubmit(getAccessToken)}>
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
        <button type="submit" disabled={isSubmitting}>
          로그인
        </button>
      </form>
    </div>
  );
}

export default Login;
