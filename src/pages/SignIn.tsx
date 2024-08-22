import React, { useState } from "react";
import Main from "components/@shared/Layout/Main";
import { Link } from "react-router-dom";
import logo from "assets/images/logo_pandamarket.png";
import Button from "components/@shared/UI/Button";
import kakaoIc from "assets/icons/ic_kakao.png";
import googleIc from "assets/icons/ic_google.png";
import visiblityOnIc from "assets/icons/ic_visibility_on.png";
import visiblityOffIc from "assets/icons/ic_visibility_off.png";

function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 유효성 검사
    if (!validateEmail(email)) {
      setError("유효한 이메일 주소를 입력해주세요.");
      return;
    }
    if (password.length < 6) {
      setError("비밀번호는 최소 6자 이상이어야 합니다.");
      return;
    }

    // 유효성 검사 통과 시 로그인 버튼 활성화
    setError("");
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <Main className="flex flex-col gap-10 w-[640px] max-xl:w-[640px]">
      <Link to="/" className="flex justify-center">
        <img src={logo} alt="판다마켓 로고" />
      </Link>
      <div className="flex flex-col gap-6 text-lg text-neutral-900">
        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <label className="font-bold" htmlFor="nickname">
              이메일
            </label>
            <input
              id="nickname"
              type="text"
              value={email}
              placeholder="이메일을 입력해주세요"
              className="outline-none bg-gray-100 py-4 px-6 rounded-2xl text-gray-400 focus:outline-brand"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative flex flex-col gap-6">
            <label className="font-bold" htmlFor="nickname">
              비밀번호
            </label>
            <input
              id="nickname"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호를 입력해주세요"
              className="outline-none bg-gray-100 py-4 px-6 rounded-2xl text-gray-400 focus:outline-brand"
            />
            <img
              src={visiblityOnIc}
              className="absolute bottom-4 right-6 w-6 h-6"
              alt="가시성 아이콘"
            />
          </div>
          <Button buttonText="로그인" className="py-4" />
        </form>
        <div className="bg-blue-50 flex justify-between rounded-lg py-4 px-[23px]">
          <p className="font-medium text-base flex items-center">
            간편 로그인하기
          </p>
          <div className="flex gap-4">
            <Link to="https://www.google.com/">
              <img
                alt="구글 아이콘"
                src={googleIc}
                className="h-[42px] w-[42px]"
              />
            </Link>
            <Link to="https://www.kakaocorp.com/page/">
              <img
                alt="카카오톡 아이콘"
                src={kakaoIc}
                className="h-[42px] w-[42px]"
              />
            </Link>
          </div>
        </div>
        <div className="flex justify-center gap-1 font-medium text-sm">
          판다마켓이 처음이신가요?
          <Link to="/signUp" className="text-brand">
            회원가입
          </Link>
        </div>
      </div>
    </Main>
  );
}
export default SignIn;
