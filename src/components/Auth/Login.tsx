import { useEffect, useContext } from "react";
import AuthHeader from "./AuthHeader";
import LoginMenu from "./LoginMenu";
import Section from "../../ui/Section/Section";
import Input from "../../ui/FormComponents/Input";
import LinkButton from "../../ui/Button/LinkButton";
import styles from "./Auth.module.css";
import { LoginInitialValue } from "./@types/Auth";
import AuthContext from "../../store/AuthContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginInitialValue>({ mode: "onChange" });

  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (authCtx.isLoggedIn) {
      navigate("/");
    }
  }, [authCtx.isLoggedIn]);

  const handleLogin = async (data: LoginInitialValue) => {
    const successs = await authCtx.login(data);
    if (successs) {
      navigate("/");
    }
  };

  const onLoginSubmit = handleSubmit(handleLogin);

  return (
    <Section>
      <AuthHeader />
      <div className={styles.container}>
        <form onSubmit={onLoginSubmit}>
          <Input
            id="email"
            type="email"
            name="email"
            label="이메일"
            placeholder="이메일을 입력해주세요"
            className={styles.inputBox}
            register={register}
            errorMsg={errors.email && errors.email.message}
            rules={{
              required: {
                value: true,
                message: "이메일을 입력해주세요.",
              },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/,
                message: "잘못된 이메일 형식입니다.",
              },
            }}
          />
          <Input
            id="password"
            type="password"
            name="password"
            label="비밀번호"
            hideBtn={true}
            placeholder="비밀번호를 입력해주세요"
            register={register}
            errorMsg={errors.password && errors.password.message}
            className={styles.inputBox}
            rules={{
              required: {
                value: true,
                message: "비밀번호를 입력해주세요.",
              },
              minLength: {
                value: 8,
                message: "비밀번호를 8자 이상 입력해주세요.",
              },
            }}
          />
          <LinkButton
            type="submit"
            className={styles.loginBtn}
            isActive={!isValid}
            btnName="로그인"
          />
        </form>
        <LoginMenu
          loginMsg="판다마켓이 처음이신가요?"
          btnMsg="회원가입"
          linkPath="/signup"
        />
      </div>
    </Section>
  );
}
