import { useState, useContext } from "react";
import AuthHeader from "./AuthHeader";
import LoginMenu from "./LoginMenu";
import Section from "../../ui/Section/Section";
import ValidateInput from "../../ui/FormComponents/ValidateInput";
import LinkButton from "../../ui/Button/LinkButton";
import styles from "./Auth.module.css";
import { LoginInitialValue } from "./@types/Auth";
import AuthContext from "../../store/AuthContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Error from "../Error/Error";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginInitialValue>({ mode: "onChange" });
  const [isError, setIsError] = useState(false);
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (data: LoginInitialValue) => {
    const successs = await authCtx.login(data);
    if (successs) {
      navigate("/");
    } else {
      setIsError(true);
    }
  };

  const handleResetIsError = () => {
    setIsError(false);
  };

  const onLoginSubmit = handleSubmit(handleLogin);

  return (
    <Section>
      <Error
        isOpen={isError}
        onResetError={handleResetIsError}
        message={authCtx.errorMessage}
      />
      <AuthHeader />
      <div className={styles.container}>
        <form onSubmit={onLoginSubmit}>
          <ValidateInput
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
          <ValidateInput
            id="password"
            type="password"
            name="password"
            label="비밀번호"
            hideBtn={true}
            placeholder="비밀번호를 입력해주세요"
            register={register}
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
            errorMsg={errors.password && errors.password.message}
            className={styles.inputBox}
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
