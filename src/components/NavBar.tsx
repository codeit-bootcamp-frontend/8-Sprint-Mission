import Link from "next/link";
import Image from "next/image";
import S from "@/components/NavBar.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const handleLogout = () => {
    setIsOpen(!isOpen);
  };
  const onClickLogout = () => {
    window.localStorage.removeItem("accessToken");
    router.reload();
  };
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setIsLoggedIn(Boolean(token));
  }, []);
  return (
    <header className={S.header}>
      <div className={S.headerNav}>
        <div className={S.logoAndLinks}>
          <Link href="/">
            <picture>
              <source
                srcSet="/images/logo/mini_logo.png"
                media="(max-width: 767px)"
                className={S.logoForPhone}
              />
              <Image
                width={153}
                height={51}
                src="/images/logo/logo.png"
                alt="판다마켓 로고"
                className={S.logoForScreen}
              />
            </picture>
          </Link>
          <div className={S.navLinksBox}>
            <Link href="/boards" legacyBehavior>
              <a className={S.navLink}>자유게시판</a>
            </Link>
            <Link href="items" className={S.navLink}>
              중고마켓
            </Link>
          </div>
        </div>
        {isLoggedIn ? (
          <div className={S.userProfileIcon}>
            <Image
              src="/images/icon/ic_null_user_profile_image.png"
              fill
              alt="유저 프로필 아이콘"
              onClick={handleLogout}
            />
            {isOpen ? (
              <div className={S.dropDown} onClick={onClickLogout}>
                로그아웃
              </div>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <Link href="/login" className={S.loginBtn}>
            로그인
          </Link>
        )}
      </div>
    </header>
  );
}

export default NavBar;
