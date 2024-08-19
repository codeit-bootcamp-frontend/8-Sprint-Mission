import Link from "next/link";
import React from "react";
import { logInUser, LogInUserProps } from "@/axios/auth";

export default function LogIn() {
  const [logInValues, setLogInValues] = React.useState<LogInUserProps>({ email: "", password: "" });

  const handleFormKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (logInValues.email === "" || logInValues.password === "") {
      if (e.key === "Enter") e.preventDefault();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentTargetId = e.target.id;
    const currentValue = e.target.value;

    setLogInValues((prevLogInValues) => ({ ...prevLogInValues, [currentTargetId]: currentValue }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const submitLogInForm = async () => {
      await logInUser(logInValues);
    };

    submitLogInForm();
  };

  return (
    <>
      <div className="text-4xl">로그인 페이지</div>
      <form onSubmit={handleFormSubmit} onKeyDown={handleFormKeyDown}>
        <label htmlFor="email" className="text-2xl">
          이메일
        </label>
        <input id="email" onChange={handleInputChange} />
        <label htmlFor="password" className="text-2xl">
          비밀번호
        </label>
        <input id="password" onChange={handleInputChange} />
        <button type="submit">로그인버튼</button>
      </form>
      <Link href="/signup">회원가입하러가기</Link>
    </>
  );
}
