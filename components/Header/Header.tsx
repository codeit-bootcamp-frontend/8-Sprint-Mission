import Image from "next/image";
import Link from "next/link";
import NavList from "./NavList";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.mainHeader}>
        <div className={styles.headerNav}>
          <div className={styles.logoBox}>
            <Link href="/" className={styles.logo}>
              <Image
                fill
                src="/images/logo@2.png"
                alt="판다마켓 로고"
                sizes="width:153px, height: 51px"
                priority
              />
            </Link>
            <Link href="/" className={styles.mobileLogo}>
              <Image
                fill
                src="/images/mobile_logo@2.png"
                alt="판다마켓 모바일 로고"
                sizes="width:81px, height: 40px"
                priority
              />
            </Link>
          </div>
          <NavList />
        </div>
        <Link href="/" className={styles.profile}>
          <Image
            fill
            src="/images/profile@2.png"
            alt="사용자 프로필"
            sizes="width:40px, height: 40px"
            priority
          />
        </Link>
      </div>
    </header>
  );
}
