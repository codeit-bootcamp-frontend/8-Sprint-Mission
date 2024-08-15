import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import NavItem from "./NavItem";
import styles from "./Header.module.css";

export default function Header() {
  const router = useRouter();
  
  const handleLoginButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/login");
  }

  if(router.pathname === "/login" || router.pathname === "/signup") {
    return null;
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link href="/">
          <div className={styles.logoContainer}>
            <Image fill src="/images/HomeLogo.png" alt="홈으로" />
          </div>
        </Link>
        <ul className={styles.nav}>
          <NavItem href="/boards" pathname={router.pathname}>
            자유게시판
          </NavItem>
          <li className={styles.navItem}>중고마켓</li>
        </ul>
      </div>
      <button className={styles.loginButton} onClick={handleLoginButtonClick}>로그인</button>
    </header>
  )
}