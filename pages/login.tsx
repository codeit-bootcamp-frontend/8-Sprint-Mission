import { useState } from "react";
import PrimaryInput from "@/components/primaryinput";
import pandaLogo from "@/images/logo.png";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import eyeIcon from "@/images/ic_eyeopen.svg";

export default function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordType = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPassword((prev) => !prev);
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
        />
      </InputWrapper>

      <InputWrapper>
        <InputLabel>비밀번호</InputLabel>

        <PrimaryInput
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="비밀번호를 입력해주세요"
        />
        <VisibleButton onClick={togglePasswordType}>
          <Image src={eyeIcon} alt="" />
        </VisibleButton>
      </InputWrapper>

      <LoginButton>로그인</LoginButton>

      <SimpleLoginWrapper>
        <SimpleLoginLabel>간편로그인하기</SimpleLoginLabel>
        <div>
          <Link href="http://www.google.com">
            <img src="/img/Component 2.png" alt="구글" />
          </Link>
          <Link href="https://www.kakaocorp.com/page/">
            <img src="/img/Component 3.png" alt="카카오톡" />
          </Link>
        </div>
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

const SimpleLoginLabel = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

const SignupWrapper = styled.div`
  display: flex;
  gap: 4px;
`;
