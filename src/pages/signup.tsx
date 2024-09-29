import Image from "next/image";
import Logo from "../../public/images/logo.png";
import Link from "next/link";
import InputText from "@/components/ui/InputText";
import GoogleImage from "../../public/images/i-google.png";
import KakaoImage from "../../public/images/i-kakao.png";
import { useEffect, useState } from "react";
import { LinkButton } from "@/styles/ButtonStyle";
import styled from "styled-components";

// const INPUT_CONTENTS = [{
//   id: "email",
//   label: "이메일",
//   type: "email",
//   placeholder: "이메일을 입력해주세요.",
// },

// {
//   id: "nickname",
//   label: "닉네임",
//   type: "text",
//   placeholder: "닉네임을 입력해주세요.",
// },

// {
//   id: "password",
//   label: "비밀번호",
//   type: "password",
//   placeholder: "비밀번호를 입력해주세요.",
// },

// {
//   id: "password",
//   label: "비밀번호 확인",
//   type: "password",
//   placeholder: "비밀번호를 다시 한 번 입력해주세요.",
// }]

const INPUT_CONTENT_EMAIL = {
  id: "email",
  label: "이메일",
  placeholder: "이메일을 입력해주세요.",
};

const INPUT_CONTENT_NICKNAME = {
  id: "nickname",
  label: "닉네임",
  placeholder: "닉네임을 입력해주세요.",
};

const INPUT_CONTENT_PASSWORD = {
  id: "password",
  label: "비밀번호",
  placeholder: "비밀번호를 입력해주세요.",
  isViewButton: true,
};

const INPUT_CONTENT_PASSWORD_CHECK = {
  id: "password",
  label: "비밀번호 확인",
  placeholder: "비밀번호를 다시 한 번 입력해주세요.",
  isViewButton: true,
};

export default function SignUpPage() {
  const [signUpEmail, setSignUpEmail] = useState<string>("");
  const [signUpNickname, setSignUpNickName] = useState<string>("");
  const [signUpPassword, setSignUpPassword] = useState<string>("");
  const [signUpPasswordCheck, setSignUpPasswordCheck] = useState<string>("");
  const [signUpPasswordType, setSignUpPasswordType] =
    useState<string>("password");
  const [signUpPasswordCheckType, setSignUpPasswordCheckType] =
    useState<string>("password");
  const [linkActive, setLinkActive] = useState<boolean>(false);

  useEffect(() => {
    if (
      signUpEmail &&
      signUpNickname &&
      signUpPassword &&
      signUpPasswordCheck
    ) {
      setLinkActive(true);
    } else {
      setLinkActive(false);
    }
  }, [signUpEmail, signUpNickname, signUpPassword, signUpPasswordCheck]);

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
          value={signUpEmail}
          setInputText={setSignUpEmail}
        />
        <InputText
          content={INPUT_CONTENT_NICKNAME}
          value={signUpNickname}
          setInputText={setSignUpNickName}
        />
        <InputText
          content={INPUT_CONTENT_PASSWORD}
          type={signUpPasswordType}
          setType={setSignUpPasswordType}
          value={signUpPassword}
          setInputText={setSignUpPassword}
        />
        <InputText
          content={INPUT_CONTENT_PASSWORD_CHECK}
          type={signUpPasswordCheckType}
          setType={setSignUpPasswordCheckType}
          value={signUpPasswordCheck}
          setInputText={setSignUpPasswordCheck}
        />
        <StyledLinkButton href="" radius={true} isDisabled={linkActive}>
          회원가입
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
          <span>이미 회원신가요?</span>
          <Link href="/login" className="text-blue underline ml-[5px]">
            로그인
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
