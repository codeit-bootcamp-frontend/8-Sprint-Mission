import React from "react";
import Logo from "@/public/images/logo/logo.svg";
import LogoTitle from "@/public/images/logo/logoTitle.svg";
import styles from "./header.module.css";
import Link from "next/link";
import Image from "next/image";

function Header() {
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
      <Link href="/login" className={styles.loginBtn}>
        로그인
      </Link>
    </header>
  );
}

export default Header;
