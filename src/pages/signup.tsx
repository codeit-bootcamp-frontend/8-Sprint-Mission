import Image from "next/image";
import Logo from "../../public/images/logo.png";
import Link from "next/link";
import InputText from "@/components/ui/InputText";
import GoogleImage from "../../public/images/i-google.png";
import KakaoImage from "../../public/images/i-kakao.png";
import { FormEvent, useEffect, useState } from "react";
import { postSignUp } from '@/api/authApi';
import { useRouter } from 'next/router';

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
	const router = useRouter();

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

	useEffect(() => {
		const userInfo = localStorage.getItem('userInfo');
		if(userInfo) {
			router.push('/');
		}
	}, [router])

	const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			const isSignUp = await postSignUp({ 
				email: signUpEmail,
				nickname: signUpNickname,
				password: signUpPassword,
				passwordConfirmation: signUpPasswordCheck,
			})
			if(isSignUp) {
				router.push('/login');
			}
		} catch (error) {
			console.error('회원가입 에러', error)
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
				<form onSubmit={handleSignUp}>
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
					<button type="submit" className={`flex justify-center items-center font-bold text-white rounded-[40px] w-full h-[56px] text-[20px] mb-[20px] ${linkActive ? 'bg-blue' : 'bg-gray-400'}`} disabled={!linkActive}>
							회원가입
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
          <span>이미 회원신가요?</span>
          <Link href="/login" className="text-blue underline ml-[5px]">
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}
