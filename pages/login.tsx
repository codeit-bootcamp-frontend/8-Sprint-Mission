import { ChangeEvent, useState } from "react";
import PrimaryInput from "@/components/primaryinput";
import pandaLogo from "@/images/logo.png";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import eyeTextIcon from "@/images/ic_eyeopen.svg";
import eyePasswordIcon from "@/images/ic_eyeclose.svg";
import kakaoIcon from "@/images/ic_kakao.png";
import googleIcon from "@/images/ic_google.png";
import { signInUser } from "./util/api";
import { UserInfo } from "@/interfaces/user";

export default function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loginInfo, setLoginInfo] = useState<UserInfo>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<UserInfo>({
    email: "",
    password: "",
  });

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginInfo((prev) => ({ ...prev, email: e.target.value }));
    setError((prev) => ({ ...prev, email: "" }));
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginInfo((prev) => ({ ...prev, password: e.target.value }));
    setError((prev) => ({ ...prev, password: "" }));
  };

  const togglePasswordType = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPassword((prev) => !prev);
  };

  const handleLoginButton = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await signInUser(loginInfo);
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
        />
        <VisibleButton onClick={togglePasswordType}>
          {showPassword ? (
            <Image src={eyeTextIcon} alt="textType" />
          ) : (
            <Image src={eyePasswordIcon} alt="textType" />
          )}
        </VisibleButton>
      </InputWrapper>

      <LoginButton onClick={handleLoginButton}>로그인</LoginButton>

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
        판다마켓이 처음이신가요?
        <Link href="/signup/">회원가입</Link>
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

const LoginButton = styled.button`
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
