import { useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { UserContext, UserContextInterface } from "@/context/userProvider";

import logoImg from "@/public/images/img_logo.svg";
import logoText from "@/public/images/img_logo_text.svg";
import icProfile from "@/public/images/ic_profile.svg";

export default function Header() {
  const pathname = usePathname();
  const [visibleHeader, setVisibleHeader] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const { user } = useContext(UserContext) as UserContextInterface;
  useEffect(() => {
    if (!user) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, [user]);

  useEffect(() => {
    if (pathname?.includes("auth")) {
      setVisibleHeader(false);
    } else {
      setVisibleHeader(true);
    }
  }, [pathname]);
  return (
    <>
      {visibleHeader && (
        <nav
          className={`fixed top-0 w-full border-b bg-white drop-shadow-sm z-10`}
        >
          <div className="mx-auto flex h-[70px] max-w-[1120px] items-center justify-between gap-2 px-4 py-2.5 md:gap-5 lg:gap-8">
            <Link href="/" className="flex gap-2.5">
              <Image
                src={logoImg}
                alt="로고이미지"
                width={40}
                height={41}
                className="hidden md:block"
                priority
              />
              <Image
                src={logoText}
                alt="로고글씨"
                width={101}
                height={41}
                priority
              />
            </Link>
            {pathname?.includes("items") && (
              <div className="grow font-bold">
                <Link href="forum" className="px-1 md:px-4">
                  자유게시판
                </Link>
                <Link href="items" className={`px-1 text-gray-600 md:px-4`}>
                  중고마켓
                </Link>
              </div>
            )}
            {isLogin ? (
              <Image
                src={icProfile}
                width={32}
                height={32}
                alt="유저프로필이미지"
              />
            ) : (
              <Link href="/auth/login">
                <button className="btn h-[48px] w-[128px]">로그인</button>
              </Link>
            )}
          </div>
        </nav>
      )}
    </>
  );
}
