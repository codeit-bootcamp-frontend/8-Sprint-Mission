import Image from "next/image";
import Logo from "../../public/images/logo.png";
import Link from "next/link";
import InputText from "@/components/ui/InputText";
import GoogleImage from "../../public/images/i-google.png";
import KakaoImage from "../../public/images/i-kakao.png";
import { useState } from "react";
import { LinkButton } from "@/styles/ButtonStyle";
import styled from "styled-components";

const INPUT_CONTENT_EMAIL = {
  id: "email",
  label: "이메일",
  type: "email",
  placeholder: "이메일을 입력해주세요.",
};

const INPUT_CONTENT_PASSWORD = {
  id: "password",
  label: "비밀번호",
  type: "password",
  placeholder: "비밀번호를 입력해주세요.",
};

export default function LoginPage() {
  const [loginEmail, setLoginEmail] = useState<string>("");
  const [loginPassword, setLoginPassword] = useState<string>("");
  const [linkActive, setLinkActive] = useState<boolean>(false);

  return (
    <div>
      <div className="flex justify-center my-[40px]">
        <Link href="/">
          <Image width={396} height={132} src={Logo} alt="판다마켓" />
        </Link>
      </div>
      <div className="max-w-[640px] mx-auto">
        <InputText
          content={INPUT_CONTENT_EMAIL}
          value={loginEmail}
          setInputText={setLoginEmail}
        />
        <InputText
          content={INPUT_CONTENT_PASSWORD}
          value={loginPassword}
          setInputText={setLoginPassword}
        />
        <StyledLinkButton href="" radius={true} isDisabled={linkActive}>
          로그인
        </StyledLinkButton>
        <div className="flex max-w-full h-[74px] px-[23px] mb-[24px] justify-between items-center rounded-[8px] bg-[#e6f2ff]">
          <p className="text-[16px] font-medium">간편 로그인하기</p>
          <div className="flex items-center gap-[15px]">
            <Link href="">
              <Image
                width={42}
                height={42}
                src={GoogleImage}
                alt="구글 이미지"
              />
            </Link>
            <Link href="">
              <Image
                width={42}
                height={42}
                src={KakaoImage}
                alt="카카오 이미지"
              />
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center text-[14px] font-medium mb-[130px]">
          <span>판다마켓이 처음이신가요?</span>
          <Link href="" className="text-blue underline ml-[5px]">
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
}

const StyledLinkButton = styled(LinkButton)`
  width: 100%;
  height: 56px;
  margin-bottom: 40px;
  font-size: 20px;
  pointer-events: ${({ isDisabled }) => (isDisabled ? "auto" : "none")};
  background-color: ${({ isDisabled }) =>
    isDisabled ? "var(--blue-color)" : "var(--gray400-color)"};
`;
