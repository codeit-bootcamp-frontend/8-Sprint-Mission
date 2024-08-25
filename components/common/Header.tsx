import React, { useEffect, useState } from "react";
import Logo from "@/public/images/logo/logo.svg";
import LogoTitle from "@/public/images/logo/logoTitle.svg";
import styles from "./header.module.css";
import Link from "next/link";
import Image from "next/image";
import profileImg from "@/public/images/icons/ic_profile.svg";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <header>
      <div className={styles.headerLinkBox}>
        <Link href="/" className={styles.headerLogoSection}>
          <Image src={Logo} alt="logo" className={styles.headerLogo} />
          <Image
            src={LogoTitle}
            alt="logoTitle"
            className={styles.headerLogoTitle}
          />
        </Link>
        <ul>
          <li>
            <Link href="/boards">자유게시판</Link>
          </li>
          <li>
            <Link href="/">중고마켓</Link>
          </li>
        </ul>
      </div>
      {isLoggedIn ? (
        <Image src={profileImg} alt="profileImg" width={40} />
      ) : (
        <Link href="/login" className={styles.loginBtn}>
          로그인
        </Link>
      )}
    </header>
  );
}

export default Header;
