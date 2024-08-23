import { logInUser, LogInUserProps } from "@/axios/auth";
import React from "react";
import BlueButton from "@/components/@shared/BlueButton";
import GrayInput from "@/components/@shared/inputs/GrayInput";

export default function LoginForm() {
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
      const data = await logInUser(logInValues);
      const { accessToken, refreshToken } = data;

      localStorage.setItem("access_token", accessToken);
      localStorage.setItem("refresh_token", refreshToken);
      window.location.href = "/";
    };

    submitLogInForm();
  };

  return (
    <form
      className="flex flex-col gap-[24px] mt-[24px] md:mt-[40px]"
      onSubmit={handleFormSubmit}
      onKeyDown={handleFormKeyDown}
    >
      <div className="flex flex-col gap-[8px] md:gap-[16px]">
        <label htmlFor="email" className="text-[14px] font-bold text-gray-800 md:text-[18px]">
          이메일
        </label>
        <GrayInput id="email" placeholder="이메일을 입력해주세요" onChange={handleInputChange} />
      </div>
      <div className="flex flex-col gap-[8px] md:gap-[16px]">
        <label htmlFor="password" className="text-[14px] font-bold text-gray-800 md:text-[18px]">
          비밀번호
        </label>
        <GrayInput
          id="password"
          placeholder="비밀번호를 입력해주세요"
          onChange={handleInputChange}
        />
      </div>
      <div className="h-[56px]">
        <BlueButton
          shape="pill"
          type="submit"
          disabled={!logInValues.email || !logInValues.password}
          customStyle="text-[20px]"
        >
          로그인
        </BlueButton>
      </div>
    </form>
  );
}
