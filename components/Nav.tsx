import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import styles from "./Nav.module.css";
import logoIcon from "@/assets/images/ic_logo_icon.png";
import logoText from "@/assets/images/ic_logo_text.png";
import profileImage from "@/assets/images/img_profile.png";

function Nav() {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const pathname = usePathname();

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
      </div>

      {!isLogin ? (
        // Button 컴포넌트로 바꾸기
        <Link className={styles.loginLink} href="/login">
          로그인
        </Link>
      ) : (
        <Image src={profileImage} alt="프로필 이미지" width={40} height={40} />
      )}
    </nav>
  );
}

export default Nav;
