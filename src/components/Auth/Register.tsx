import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LoginMenu from "./LoginMenu";
import AuthHeader from "./AuthHeader";
import Section from "../../ui/Section/Section";
import Input from "../../ui/FormComponents/Input";
import LinkButton from "../../ui/Button/LinkButton";
import styles from "./Auth.module.css";
import { RegisterInitialValue, ChangeValueType } from "./@types/Auth";
import { signUp } from "../../utils/http";
import AuthContext from "../../store/AuthContext";

const INITIAL_VALUE: RegisterInitialValue = {
  email: "",
  nickname: "",
  password: "",
  passwordCheck: "",
};

export default function Register() {
  const navigate = useNavigate();
  const [formValue, setFormValue] =
    useState<RegisterInitialValue>(INITIAL_VALUE);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    if (authCtx.isLoggedIn) {
      navigate("/");
    }
  }, [authCtx.isLoggedIn]);

  const handleRegister = async () => {
    try {
      const res = await signUp(formValue);
      console.log(res);
      navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    handleRegister();
  };

  const handleChangeFormValue: ChangeValueType = (name, value) => {
    setFormValue((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Section>
      <AuthHeader />
      <div className={styles.container}>
        <form onSubmit={handleSubmitRegister}>
          <Input
            id="email"
            type="email"
            name="email"
            label="이메일"
            placeholder="이메일을 입력해주세요"
            className={styles.inputBox}
            changeValue={handleChangeFormValue}
          />
          <Input
            id="nickname"
            type="text"
            name="nickname"
            label="닉네임"
            placeholder="닉네임을 입력해주세요"
            className={styles.inputBox}
            changeValue={handleChangeFormValue}
          />
          <Input
            id="password"
            type="password"
            name="password"
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            className={styles.inputBox}
            changeValue={handleChangeFormValue}
          />
          <Input
            id="passwordCheck"
            type="password"
            name="passwordCheck"
            label="비밀번호 확인"
            placeholder="비밀번호를 다시 한 번 입력해주세요"
            className={styles.inputBox}
            changeValue={handleChangeFormValue}
          />
          <LinkButton
            type="submit"
            className={styles.loginBtn}
            isActive={false}
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
