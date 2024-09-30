import Image from "next/image";
import Logo from "../../public/images/logo.png";
import Link from "next/link";
import InputText from "@/components/ui/InputText";
import GoogleImage from "../../public/images/i-google.png";
import KakaoImage from "../../public/images/i-kakao.png";
import { FormEvent, useEffect, useState } from "react";
import { useMutation } from '@tanstack/react-query';
import { postLogin } from '@/api/authApi';
import { useRouter } from 'next/router';

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
  isViewButton: true,
};

export type LoginType = {
	email: string,
	password: string,
}

export default function LoginPage() {
  const [loginEmail, setLoginEmail] = useState<string>("");
  const [loginPassword, setLoginPassword] = useState<string>("");
  const [loginPasswordType, setLoginPasswordType] =
    useState<string>("password");
  const [linkActive, setLinkActive] = useState<boolean>(true);
	const router = useRouter();

  useEffect(() => {
    if (loginEmail && loginPassword) {
      setLinkActive(false);
    } else {
      setLinkActive(true);
    }
  }, [loginEmail, loginPassword]);

	useEffect(() => {
		const userInfo = localStorage.getItem('userInfo');
		if(userInfo) {
			router.push('/');
		}
	}, [router])

	const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try{
			const userInfo = await postLogin({email: loginEmail, password: loginPassword});
			if(userInfo) {
				localStorage.setItem("userInfo", JSON.stringify(userInfo));
				console.log("로그인 성공", userInfo);
				router.push('/');
			}
		} catch (error) {
			console.error('로그인 오류', error)
		}
	}

  return (
    <div>
      <div className="flex justify-center my-[40px]">
        <Link href="/">
          <Image width={396} height={132} src={Logo} alt="판다마켓" />
        </Link>
      </div>
      <div className="max-w-[640px] mx-auto">
				<form onSubmit={handleLogin}>
					<InputText
						content={INPUT_CONTENT_EMAIL}
						value={loginEmail}
						setInputText={setLoginEmail}
					/>
					<InputText
						content={INPUT_CONTENT_PASSWORD}
						value={loginPassword}
						type={loginPasswordType}
						setType={setLoginPasswordType}
						setInputText={setLoginPassword}
					/>
					<button type="submit" className={`flex justify-center items-center font-bold text-white rounded-[40px] w-full h-[56px] text-[20px] mb-[20px] ${linkActive ? 'bg-gray-400' : 'bg-blue'}`} disabled={linkActive}>
							로그인
					</button>
				</form>
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
          <Link href="/signup" className="text-blue underline ml-[5px]">
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
}
