import React from "react";
import { Link } from "react-router-dom";
import kakaoIc from "assets/icons/ic_kakao.png";
import googleIc from "assets/icons/ic_google.png";

const QuickLogin: React.FC = () => {
  return (
    <div className="bg-blue-50 flex justify-between rounded-lg py-4 px-[23px]">
      <p className="font-medium text-base flex items-center">간편 로그인하기</p>
      <ul className="flex gap-4">
        <li>
          <Link to="https://www.google.com/">
            <img
              alt="구글 아이콘"
              src={googleIc}
              className="h-[42px] w-[42px]"
            />
          </Link>
        </li>
        <li>
          <Link to="https://www.kakaocorp.com/page/">
            <img
              alt="카카오톡 아이콘"
              src={kakaoIc}
              className="h-[42px] w-[42px]"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default QuickLogin;
