import React from "react";
import Main from "components/common/Layout/Main";
import { Link } from "react-router-dom";
import logo from "assets/images/logo_pandamarket.png";
import Button from "components/common/UI/Button";
import kakaoIc from "assets/icons/ic_kakao.png";
import googleIc from "assets/icons/ic_google.png";
import visiblityOnIc from "assets/icons/ic_visibility_on.png";
import visiblityOffIc from "assets/icons/ic_visibility_off.png";

function SignUp() {
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
              placeholder="이메일을 입력해주세요"
              className="bg-gray-100 py-4 px-6 rounded-2xl text-gray-400"
            />
          </div>
          <div className="flex flex-col gap-6">
            <label className="font-bold" htmlFor="nickname">
              닉네임
            </label>
            <input
              id="nickname"
              type="text"
              placeholder="닉네임을 입력해주세요"
              className="bg-gray-100 py-4 px-6 rounded-2xl text-gray-400"
            />
          </div>
          <div className="relative flex flex-col">
            <label className="font-bold" htmlFor="nickname">
              비밀번호
            </label>
            <input
              id="nickname"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              className=" bg-gray-100 py-4 px-6 rounded-2xl text-gray-400 mt-6"
            />
            <button>
              <img
                src={visiblityOnIc}
                className="absolute bottom-5 right-6 w-6 h-6"
                alt="가시성 아이콘"
              />
            </button>
          </div>
          <div className="relative flex flex-col">
            <label className="font-bold" htmlFor="nickname">
              비밀번호 확인
            </label>
            <input
              id="nickname"
              type="password"
              placeholder="비밀번호를 다시 입력해주세요"
              className="bg-gray-100 py-4 px-6 rounded-2xl text-gray-400 mt-6"
            />
            <button>
              <img
                src={visiblityOnIc}
                className="absolute bottom-4 right-6 w-6 h-6"
                alt="가시성 아이콘"
              />
            </button>
          </div>
          <Button buttonText="회원가입" className="py-4" />
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
          이미 회원이신가요?
          <Link to="/signIn" className="text-brand">
            로그인
          </Link>
        </div>
      </div>
    </Main>
  );
}
export default SignUp;
