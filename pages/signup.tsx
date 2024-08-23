import React, { ChangeEvent, useEffect, useState } from "react";
import PrimaryInput from "@/components/primaryinput";
import pandaLogo from "@/images/logo.png";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import eyeTextIcon from "@/images/ic_eyeopen.svg";
import eyePasswordIcon from "@/images/ic_eyeclose.svg";
import kakaoIcon from "@/images/ic_kakao.png";
import googleIcon from "@/images/ic_google.png";
import { UserInfo } from "@/interfaces/user";
import { signUpUser } from "./util/api";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [signupDisable, setSignupDisable] = useState<boolean>(true);
  const [signupInfo, setSignupInfo] = useState<UserInfo>({
    email: "",
    nickname: "",
    password: "",
    passwordConfirmation: "",
  });

  const [error, setError] = useState<UserInfo>({
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  useEffect(() => {
    const { email, nickname, password } = signupInfo;
    if (
      email &&
      nickname &&
      password &&
      !error.email &&
      !error.password &&
      !error.passwordConfirmation
    ) {
      setSignupDisable(false);
    } else {
      setSignupDisable(true);
    }
  }, [signupInfo]);

  const togglePasswordType = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordType = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    setShowConfirmPassword((prev) => !prev);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSignupInfo((prev) => ({ ...prev, email: e.target.value }));
    setError((prev) => ({ ...prev, email: "" }));
  };

  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSignupInfo((prev) => ({ ...prev, nickname: e.target.value }));
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSignupInfo((prev) => ({ ...prev, password: e.target.value }));
    setError((prev) => ({ ...prev, password: "" }));
  };

  const handlePasswordCheckChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSignupInfo((prev) => ({
      ...prev,
      passwordConfirmation: e.target.value,
    }));
    setError((prev) => ({ ...prev, passwordConfirmation: "" }));
  };

  const handleEmailBlur = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(signupInfo.email)) {
      setError((prev) => ({ ...prev, email: "잘못된 이메일입니다." }));
    }
  };

  const handlePasswordBlur = () => {
    if (signupInfo.password.length < 8) {
      setError((prev) => ({
        ...prev,
        password: "비밀번호를 8자 이상 입력해주세요.",
      }));
    }
  };

  const handlePasswordCheckBlur = () => {
    if (signupInfo.passwordConfirmation!.length < 8) {
      setError((prev) => ({
        ...prev,
        passwordConfirmation: "비밀번호를 8자 이상 입력해주세요.",
      }));
    } else if (signupInfo.passwordConfirmation !== signupInfo.password) {
      setError((prev) => ({
        ...prev,
        passwordConfirmation: "비밀번호가 일치하지 않습니다.",
      }));
    }
  };

  const handleSignUpClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await signUpUser(signupInfo);
  };
  return (
    <LoginContainer>
      <Image src={pandaLogo} alt="logo" width={396} height={132} />
      <InputWrapper>
        <InputLabel>이메일</InputLabel>
        <PrimaryInput
          id="email"
          name="email"
          type="email"
          placeholder="이메일을 입력해주세요"
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          hasError={!!error.email}
        />
        {error.email && <ErrorText>{error.email}</ErrorText>}
      </InputWrapper>

      <InputWrapper>
        <InputLabel>닉네임</InputLabel>
        <PrimaryInput
          id="nickname"
          name="nickname"
          type="text"
          placeholder="닉네임을 입력해주세요"
          onChange={handleNicknameChange}
        />
      </InputWrapper>

      <InputWrapper>
        <InputLabel>비밀번호</InputLabel>
        <PrimaryInput
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="비밀번호를 입력해주세요"
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          hasError={!!error.password}
        />
        <VisibleButton onClick={togglePasswordType}>
          {showPassword ? (
            <Image src={eyeTextIcon} alt="textType" />
          ) : (
            <Image src={eyePasswordIcon} alt="textType" />
          )}
        </VisibleButton>
        {error.password && <ErrorText>{error.password}</ErrorText>}
      </InputWrapper>

      <InputWrapper>
        <InputLabel>비밀번호 확인</InputLabel>
        <PrimaryInput
          id="password"
          name="password"
          type={showConfirmPassword ? "text" : "password"}
          placeholder="비밀번호를 다시 한 번 입력해주세요"
          onChange={handlePasswordCheckChange}
          onBlur={handlePasswordCheckBlur}
          hasError={!!error.passwordConfirmation}
        />
        <VisibleButton onClick={toggleConfirmPasswordType}>
          {showConfirmPassword ? (
            <Image src={eyeTextIcon} alt="textType" />
          ) : (
            <Image src={eyePasswordIcon} alt="textType" />
          )}
        </VisibleButton>
        {error.passwordConfirmation && (
          <ErrorText>{error.passwordConfirmation}</ErrorText>
        )}
      </InputWrapper>

      <SignUpButton disabled={signupDisable} onClick={handleSignUpClick}>
        회원가입
      </SignUpButton>

      <SimpleLoginWrapper>
        <SimpleLoginLabel>간편 로그인하기</SimpleLoginLabel>
        <SimpleLinkWrapper>
          <Link href="http://www.google.com">
            <Image src={googleIcon} alt="구글" />
          </Link>
          <Link href="https://www.kakaocorp.com/page/">
            <Image src={kakaoIcon} alt="카카오톡" />
          </Link>
        </SimpleLinkWrapper>
      </SimpleLoginWrapper>

      <SignupWrapper>
        이미 회원이신가요?
        <Link href="/login/">로그인</Link>
      </SignupWrapper>
    </LoginContainer>
  );
}

const LoginContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 640px;
  gap: 24px;

  @media (max-width: 744px) {
    padding: 94px 52px;
  }
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 16px;
`;

const InputLabel = styled.label`
  font-size: 18px;
  font-weight: 700;
`;

const VisibleButton = styled.button`
  position: absolute;
  border: none;
  top: 50px;
  right: 20px;
  background-color: transparent;
`;

const SignUpButton = styled.button<{ disabled: boolean }>`
  background-color: ${({ disabled }) => (disabled ? "#9CA3AF" : "#3692ff")};
  width: 100%;
  border-radius: 40px;
  padding: 16px 124px;
  font-size: 20px;
  color: #f3f4f6;
  font-weight: 600;
  text-decoration: none;
  border: none;
`;

const SimpleLoginWrapper = styled.div`
  width: 100%;
  height: 74px;
  background-color: #e6f2ff;
  padding: 16px 23px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SimpleLinkWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const SimpleLoginLabel = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

const SignupWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  margin-top: -10px;
  margin-left: 10px;
`;
