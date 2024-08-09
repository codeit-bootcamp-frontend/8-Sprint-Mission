import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";

export default function Header() {

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link href="/">
          <div className={styles.logoContainer}>
            <Image fill src="/images/HomeLogo.png" alt="홈으로" />
          </div>
        </Link>
        <ul className={styles.nav}>
          <Link href="/boards" style={{ textDecoration: "none" }}>
            <li className={styles.navItem}>자유게시판</li>
          </Link>
          <li className={styles.navItem}>중고마켓</li>
        </ul>
      </div>
    </header>
  )
}