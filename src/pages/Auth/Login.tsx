import Logo from "../../assets/logo.svg";
import InvisibleBtn from "../../assets/btn_invisible.svg";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import EasyLogin from "../../components/UI/EasyLogin";
import { postLogin } from "../../lib/authApi";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginValue } from "../../lib/authApi";
import classNames from "classnames";
import { useEffect } from "react";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitted, errors, isValid },
  } = useForm<LoginValue>({ mode: "onChange" });

  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      navigate("/");
    }
  }, [navigate]);

  const onSubmit: SubmitHandler<LoginValue> = async (data) => {
    const result = await postLogin({
      email: data.email,
      password: data.password,
    });
    localStorage.setItem("accessToken", result.accessToken);
    navigate("/");
  };

  return (
    <main className={styles.loginContainer}>
      <img className="auth-logo" src={Logo} alt="logo" />
      <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
        <label className="auth-label" htmlFor="email">
          이메일
        </label>
        <input
          className={classNames("auth-input", {
            required: true,
            error: errors.email,
            valid: isSubmitted,
          })}
          type="email"
          placeholder="이메일을 입력해주세요"
          aria-invalid={
            isSubmitted ? (errors.email ? "true" : "false") : undefined
          }
          {...register("email", {
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "잘못된 이메일 입니다.",
            },
          })}
        />
        {errors.email && <small role="alert">{errors.email.message}</small>}
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
        <button className="auth-button" disabled={!isValid}>
          로그인
        </button>
      </form>
      <EasyLogin />
      <div className={styles.isMember}>
        판다마켓이 처음이신가요?
        <Link className={styles.link} to="/signup">
          회원가입
        </Link>
      </div>
    </main>
  );
}
