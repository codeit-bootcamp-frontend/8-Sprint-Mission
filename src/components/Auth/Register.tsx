import { useState, useEffect } from "react";
import AuthHeader from "./AuthHeader";
import Section from "../../ui/Section/Section";
import Input from "../../ui/FormComponents/Input";
import Button from "../../ui/Button/Button";
import styles from "./Register.module.css";

interface RegisterInitialValue extends InitialValue {
  nickName: string;
  passwordCheck: string;
}

const INITIAL_VALUE = {
  email: "",
  nickName: "",
  password: "",
  passwordCheck: "",
};

export default function Register() {
  const [formValue, setFormValue] =
    useState<RegisterInitialValue>(INITIAL_VALUE);

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
        <form>
          <Input
            id="email"
            type="email"
            name="email"
            label="이메일"
            className={styles.inputBox}
            changeValue={handleChangeFormValue}
          />
          <Input
            id="nickName"
            type="text"
            name="nickName"
            label="닉네임"
            className={styles.inputBox}
            changeValue={handleChangeFormValue}
          />
          <Input
            id="password"
            type="password"
            name="password"
            label="비밀번호"
            className={styles.inputBox}
            changeValue={handleChangeFormValue}
          />
          <Input
            id="passwordCheck"
            type="password"
            name="passwordCheck"
            label="비밀번호 확인"
            className={styles.inputBox}
            changeValue={handleChangeFormValue}
          />
          <Button type="submit" isActive={false} btnName="회원가입" />
        </form>
      </div>
    </Section>
  );
}
