import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import NavItem from "./NavItem";

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
          <NavItem href="/boards">
            자유게시판
          </NavItem>
          <li className={styles.navItem}>중고마켓</li>
        </ul>
      </div>
    </header>
  )
}