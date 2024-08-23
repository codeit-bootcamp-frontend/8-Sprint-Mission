import React from "react";
import { signUpUser, SignUpUserProps } from "@/axios/auth";
import GrayInput from "../@shared/inputs/GrayInput";
import BlueButton from "../@shared/BlueButton";

export default function SignUpForm() {
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
      const data = await signUpUser(signUpValues);
      const { accessToken, refreshToken } = data;

      localStorage.setItem("access_token", accessToken);
      localStorage.setItem("refresh_token", refreshToken);
      window.location.href = "/";
    };

    submitSignUpForm();
  };

  return (
    <form
      className="flex flex-col gap-[24px] mt-[24px] md:mt-[40px]"
      onSubmit={handleSignUpUserSubmit}
      onKeyDown={handleFormKeyDown}
    >
      <div className="flex flex-col gap-[8px] md:gap-[16px]">
        <label htmlFor="email" className="text-[14px] font-bold text-gray-800 md:text-[18px]">
          이메일
        </label>
        <GrayInput id="email" placeholder="이메일을 입력해주세요" onChange={handleInputChange} />
      </div>
      <div className="flex flex-col gap-[8px] md:gap-[16px]">
        <label htmlFor="nickname" className="text-[14px] font-bold text-gray-800 md:text-[18px]">
          닉네임
        </label>
        <GrayInput id="nickname" placeholder="닉네임을 입력해주세요" onChange={handleInputChange} />
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
      <div className="flex flex-col gap-[8px] md:gap-[16px]">
        <label
          htmlFor="passwordConfirmation"
          className="text-[14px] font-bold text-gray-800 md:text-[18px]"
        >
          비밀번호 확인
        </label>
        <GrayInput
          id="passwordConfirmation"
          placeholder="비밀번호를 다시 한 번 입력해주세요"
          onChange={handleInputChange}
        />
      </div>
      <div className="h-[56px]">
        <BlueButton shape="pill" type="submit" disabled={false} customStyle="text-[20px]">
          회원가입
        </BlueButton>
      </div>
    </form>
  );
}
