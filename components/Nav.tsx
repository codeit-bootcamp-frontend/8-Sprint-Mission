import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LinkButton from "./Buttons/LinkButton";

import styles from "./Nav.module.css";
import Image from "next/image";
import logoIcon from "@/assets/images/ic_logo_icon.png";
import logoText from "@/assets/images/ic_logo_text.png";
import profileImage from "@/assets/images/img_profile.png";

function Nav() {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const pathname = usePathname();

  if (typeof window !== "undefined") {
    const isSignedIn = !!localStorage.getItem("user_information");
    useEffect(() => {
      setIsLogin(isSignedIn);
    }, [isSignedIn]);
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.logoMenuWrapper}>
        <Link className={styles.logoWrapper} href="/">
          <Image
            className={styles.logoIcon}
            src={logoIcon}
            alt="판다마켓 로고 중 아이콘"
          />
          <Image
            className={styles.logoText}
            src={logoText}
            alt="판다마켓 로고 중 텍스트"
            priority
          />
        </Link>

        {isLogin && (
          <ul className={styles.menuWrapper}>
            <li>
              <Link
                className={`${styles.menu} ${
                  pathname === "/boards" ? styles.active : ""
                }`}
                href="/boards"
              >
                자유게시판
              </Link>
            </li>
            <li>
              <Link
                className={`${styles.menu} ${
                  pathname === "/items" ? styles.active : ""
                }`}
                href="/items"
              >
                중고마켓
              </Link>
            </li>
          </ul>
        )}
      </div>

      {!isLogin ? (
        <LinkButton href="/login" text="로그인" />
      ) : (
        <Image src={profileImage} alt="프로필 이미지" width={40} height={40} />
      )}
    </nav>
  );
}

export default Nav;
