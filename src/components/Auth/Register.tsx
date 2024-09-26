import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LoginMenu from "./LoginMenu";
import AuthHeader from "./AuthHeader";
import Section from "../../ui/Section/Section";
import Input from "../../ui/FormComponents/Input";
import LinkButton from "../../ui/Button/LinkButton";
import styles from "./Auth.module.css";
import { RegisterInitialValue } from "./@types/Auth";
import AuthContext from "../../store/AuthContext";
import { useForm } from "react-hook-form";
import Error from "../Error/Error";

export default function Register() {
  const [isError, setIsError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
  } = useForm<RegisterInitialValue>({ mode: "onChange" });

  const navigate = useNavigate();

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    if (authCtx.isLoggedIn) {
      navigate("/");
    }
  }, [authCtx.isLoggedIn]);

  const validateConfirmPassword = (value: string) => {
    const { password } = getValues();
    if (value !== password) {
      return "비밀번호가 일치하지 않습니다'";
    }
    return true;
  };

  const handleRegister = async (data: RegisterInitialValue) => {
    const successs = await authCtx.register(data);
    if (successs) {
      navigate("/signin");
    } else {
      setIsError(true);
    }
  };

  const handleSubmitRegister = (data: RegisterInitialValue) => {
    handleRegister(data);
  };

  const onRegisterSubmit = handleSubmit(handleSubmitRegister);

  const handleResetIsError = () => {
    setIsError(false);
  };

  return (
    <Section>
      <AuthHeader />
      <Error
        isOpen={isError}
        onResetError={handleResetIsError}
        message={authCtx.errorMessage}
      />
      <div className={styles.container}>
        <form onSubmit={onRegisterSubmit}>
          <Input
            id="email"
            type="email"
            name="email"
            label="이메일"
            placeholder="이메일을 입력해주세요"
            errorMsg={errors.email && errors.email.message}
            className={styles.inputBox}
            {...register("email", {
              required: {
                value: true,
                message: "이메일을 입력해주세요.",
              },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/,
                message: "잘못된 이메일 형식입니다.",
              },
            })}
          />
          <Input
            id="nickname"
            type="text"
            name="nickname"
            label="닉네임"
            placeholder="닉네임을 입력해주세요"
            errorMsg={errors.nickname && errors.nickname.message}
            className={styles.inputBox}
            {...register("nickname", {
              required: {
                value: true,
                message: "닉네임을 입력해주세요.",
              },
            })}
          />
          <Input
            id="password"
            type="password"
            name="password"
            label="비밀번호"
            hideBtn={true}
            placeholder="비밀번호를 입력해주세요"
            errorMsg={errors.password && errors.password.message}
            className={styles.inputBox}
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
          <Input
            id="passwordCheck"
            type="password"
            name="passwordCheck"
            label="비밀번호 확인"
            hideBtn={true}
            placeholder="비밀번호를 다시 한 번 입력해주세요"
            errorMsg={errors.passwordCheck && errors.passwordCheck.message}
            className={styles.inputBox}
            {...register("passwordCheck", {
              required: {
                value: true,
                message: "비밀번호를 입력해주세요.",
              },
              validate: validateConfirmPassword,
            })}
          />
          <LinkButton
            type="submit"
            className={styles.loginBtn}
            isActive={!isValid}
            btnName="회원가입"
          />
        </form>
        <LoginMenu
          loginMsg="이미 회원이신가요?"
          btnMsg="로그인"
          linkPath="/signin"
        />
      </div>
    </Section>
  );
}
