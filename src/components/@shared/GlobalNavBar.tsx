import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import BlueButton from "./BlueButton";

interface GlobalNavBarProps {
  isMain: boolean;
  isLogin: boolean;
}

const NAV_MENU_INFO = [
  { href: "/boards", text: "자유게시판" },
  { href: "/items", text: "중고마켓" },
];

export default function GlobalNavBar({ isMain, isLogin }: GlobalNavBarProps) {
  const router = useRouter();
  const path = router.pathname;

  return (
    <header className="sticky top-0 bg-gray h-[70px] z-10 border-solid border-b-[1px] border-header-under">
      <div className="flex h-full justify-between items-center mx-4 md:mx-6 xl:mx-[200px]">
        <div className="flex h-full items-center gap-[8px] md:gap-[29px] xl:gap-[24px]">
          <Link href="/">
            <Image
              className="hidden md:block"
              width={153}
              height={51}
              priority
              src="/images/panda_logo_with_typo.png"
              alt="로고 이미지"
            />
            <Image
              className="md:hidden"
              width={isMain ? "103" : "81"}
              height={isMain ? "51" : "40"}
              src="/images/panda_typo.png"
              alt="로고 타이포 이미지"
            />
          </Link>
          {!isMain && (
            <div className="flex gap-2 md:gap-0">
              {NAV_MENU_INFO.map((info) => (
                <Link
                  key={info.text}
                  href={info.href}
                  className={`h-full text-base font-bold md:text-[18px] md:px-[15px]
                    ${path.includes(info.href) ? "text-brand-blue" : "text-gray-600"}`}
                >
                  {info.text}
                </Link>
              ))}
            </div>
          )}
        </div>
        <div>
          {isLogin ? (
            <Image
              width={40}
              height={40}
              src="/images/img_basic_user_pfp.png"
              alt="기본 프로필 이미지"
            />
          ) : (
            <div className={isMain ? "w-[128px] h-[48px]" : "w-[88px] h-[42px]"}>
              <BlueButton customStyle={isMain ? "text-[18px]" : "text-[16px]"} shape="default">
                로그인
              </BlueButton>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
