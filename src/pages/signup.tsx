import Link from "next/link";
import React from "react";
import { signUpUser, SignUpUserProps } from "@/axios/auth";

export default function SignUp() {
  const [signUpValues, setSignUpValues] = React.useState<SignUpUserProps>({
    email: "",
    nickname: "",
    password: "",
    passwordConfirmation: "",
  });

  const handleFormKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter") e.preventDefault();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentTargetId = e.target.id;
    const currentValue = e.target.value;

    setSignUpValues((prevSignUpValues) => ({
      ...prevSignUpValues,
      [currentTargetId]: currentValue,
    }));
  };

  const handleSignUpUserSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const submitSignUpForm = async () => {
      await signUpUser(signUpValues);
    };

    submitSignUpForm();
  };

  return (
    <>
      <div className="text-4xl">회원가입 페이지</div>
      <form onSubmit={handleSignUpUserSubmit} onKeyDown={handleFormKeyDown}>
        <label htmlFor="email" className="text-2xl">
          이메일
        </label>
        <input id="email" onChange={handleInputChange} />
        <label htmlFor="nickname" className="text-2xl">
          닉네임
        </label>
        <input id="nickname" onChange={handleInputChange} />
        <label htmlFor="password" className="text-2xl">
          비밀번호
        </label>
        <input id="password" onChange={handleInputChange} />
        <label htmlFor="passwordConfirmation" className="text-2xl">
          비밀번호 확인
        </label>
        <input id="passwordConfirmation" onChange={handleInputChange} />
        <button type="submit">제출하기</button>
      </form>
      <Link href="/login">로그인하러가기</Link>
    </>
  );
}
