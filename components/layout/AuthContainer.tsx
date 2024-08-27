import { PropsWithChildren, ReactNode } from "react";
import Image from "next/image";

import logoImg from "@/public/images/img_logo.svg";
import logoText from "@/public/images/img_logo_text.svg";
import icKakao from "@/public/images/ic_kakao.png";
import icGoogle from "@/public/images/ic_google.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";

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

export default function AuthContainer({ children }: PropsWithChildren) {
  const pathName = usePathname();
  const nowPathname = pathName === "/auth/login" ? "login" : "signup";

  return (
    <div className="mx-auto mt-20 max-w-2xl px-4 md:mt-48 md:px-5 lg:mt-56">
      <div className="flex-center">
        <Link href="/" className="flex-center gap-3 md:gap-5">
          <div className=" relative w-[52px] md:w-[103px] h-[52px] md:h-[103px]">
            <Image fill priority src={logoImg} alt="로고 이미지" />
          </div>
          <div className="relative h-[45px] md:h-[90px] w-[133px] md:w-[268px] ">
            <Image fill priority src={logoText} alt="로고 글씨" />
          </div>
        </Link>
      </div>
      <div className="pt-6 md:pt-14">{children}</div>
      <div className="mt-6 flex w-full items-center justify-between rounded-lg bg-blue-100 px-6 py-4">
        <span className="text-base">간편 로그인하기</span>
        <div className="flex gap-4">
          <Image alt="구글 아이콘" src={icGoogle} width={42} height={42} />
          <Image alt="카카오 아이콘" src={icKakao} width={42} height={42} />
        </div>
      </div>
      <p className="flex-center gap-1 pt-6 text-sm font-medium">
        {INITIAL_TEXT[nowPathname].msg}
        <Link
          href={nowPathname === "login" ? "/auth/signup" : "/auth/login"}
          className="text-my-blue underline"
        >
          {INITIAL_TEXT[nowPathname].link}
        </Link>
      </p>
    </div>
  );
}
