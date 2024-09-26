import Logo from "../../assets/logo.svg";
import InvisibleBtn from "../../assets/btn_invisible.svg";
import { Link, useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css";
import EasyLogin from "../../components/UI/EasyLogin";
import { postSignUp, SignUpValue } from "../../lib/authApi";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import classNames from "classnames";
import { useEffect } from "react";

export default function SignUp() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { isSubmitted, errors, isValid },
  } = useForm<SignUpValue>({ mode: "onBlur" });

  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      navigate("/");
    }
  }, [navigate]);

  const onSubmit: SubmitHandler<SignUpValue> = async (data) => {
    const result = await postSignUp({
      email: data.email,
      nickname: data.nickname,
      password: data.password,
      passwordConfirmation: data.passwordConfirmation,
    });
    console.log(result);
    navigate("/login");
  };

  return (
    <main className={styles.signUpContainer}>
      <img className="auth-logo" src={Logo} alt="logo" />
      <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
        <label className="auth-label" htmlFor="email">
          이메일
        </label>
        <input
          className={classNames("auth-input", {
            error: errors.email,
            valid: isSubmitted,
          })}
          type="email"
          placeholder="이메일을 입력해주세요"
          aria-invalid={
            isSubmitted ? (errors.email ? "true" : "false") : undefined
          }
          {...register("email", {
            required: true,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "잘못된 이메일 입니다.",
            },
          })}
        />
        {errors.email && <small role="alert">{errors.email.message}</small>}
        <label className="auth-label" htmlFor="nickname">
          닉네임
        </label>
        <input
          className={classNames("auth-input", {
            error: errors.nickname,
            valid: isSubmitted,
          })}
          type="nickname"
          placeholder="닉네임을 입력해주세요"
          {...register("nickname", {
            required: true,
          })}
        />
        <label className="auth-label" htmlFor="password">
          비밀번호
        </label>
        <div className="password">
          <input
            className={classNames("auth-input", {
              error: errors.password,
              valid: isSubmitted,
            })}
            type="password"
            placeholder="비밀번호를 입력해주세요"
            aria-invalid={
              isSubmitted ? (errors.password ? "true" : "false") : undefined
            }
            {...register("password", {
              required: true,
              minLength: {
                value: 8,
                message: "비밀번호를 8자 이상 입력해주세요.",
              },
            })}
          />
          <img
            className="invisible-btn"
            src={InvisibleBtn}
            alt="비밀번호 숨김 아이콘"
          />
        </div>
        {errors.password && (
          <small role="alert">{errors.password.message}</small>
        )}
        <label className="auth-label" htmlFor="password-check">
          비밀번호 확인
        </label>
        <div className="password">
          <input
            className={classNames("auth-input", {
              error: errors.passwordConfirmation,
              valid: isSubmitted,
            })}
            type="password"
            placeholder="비밀번호를 다시 한 번 입력해주세요"
            aria-invalid={
              isSubmitted
                ? errors.passwordConfirmation
                  ? "true"
                  : "false"
                : undefined
            }
            {...register("passwordConfirmation", {
              required: true,
              validate: (value) => {
                const { password } = watch();
                return value === password || "비밀번호가 일치하지 않습니다.";
              },
            })}
          />
          <img
            className="invisible-btn"
            src={InvisibleBtn}
            alt="비밀번호 숨김 아이콘"
          />
        </div>
        {errors.passwordConfirmation && (
          <small role="alert">{errors.passwordConfirmation.message}</small>
        )}
        <button className="auth-button" type="submit" disabled={!isValid}>
          회원가입
        </button>
      </form>
      <EasyLogin />
      <div className={styles.isMember}>
        이미 회원이신가요?
        <Link className={styles.link} to="/login">
          로그인
        </Link>
      </div>
    </main>
  );
}
