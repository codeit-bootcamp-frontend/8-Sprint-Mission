import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import logoImg from "#assets/images/logo.svg";
import logoText from "#assets/images/logo-txt.svg";
import icKakao from "#assets/icons/kakao-icon.png";
import icGoogle from "#assets/icons/google-icon.png";

const INITIAL_TEXT = {
  login: {
    msg: "판다마켓이 처음이신가요?",
    link: "회원가입",
  },
  signup: {
    msg: "이미 회원이신가요?",
    link: "로그인",
  },
} as const;

type PathKey = "login" | "signup";

export default function Auth() {
  const [nowPathname, setNowPathName] = useState<PathKey>("login");
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.includes("login")) {
      setNowPathName("login");
    } else {
      setNowPathName("signup");
    }
  }, [pathname]);

  return (
    <div className="mx-auto mt-20 max-w-2xl px-4 md:mt-48 md:px-5 lg:mt-56">
      <div className="flex-center">
        <Link to="/" className="flex gap-3 md:gap-5">
          <img src={logoImg} className="w-[52px] md:w-[103px]"></img>
          <img src={logoText} className="w-[133px] md:w-[268px]"></img>
        </Link>
      </div>
      <div className="pt-6 md:pt-14">
        <Outlet />
      </div>
      <div className="mt-6 flex w-full items-center justify-between rounded-lg bg-blue-100 px-6 py-4">
        <span className="text-base">간편 로그인하기</span>
        <div className="flex gap-4">
          <img src={icGoogle} className="w-10" />
          <img src={icKakao} className="w-10" />
        </div>
      </div>
      <p className="flex-center gap-1 pt-6 text-sm font-medium">
        {INITIAL_TEXT[nowPathname].msg}
        <Link
          to={nowPathname === "login" ? "/auth/signup" : "/auth/login"}
          className="text-my-blue underline"
        >
          {INITIAL_TEXT[nowPathname].link}
        </Link>
      </p>
    </div>
  );
}
