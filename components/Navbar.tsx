import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          className={styles.logo}
          src="/logo.png"
          alt="로고 이미지"
          width={153}
          height={51}
          priority
        />
      </Link>
      <div className={styles.menu}>
        <div className={styles.menuBoard}>자유게시판</div>
        <div className={styles.menuMarket}>중고마켓</div>
      </div>
      <Image
        className={styles.profile}
        src="/profile.png"
        alt="프로필 이미지"
        width={40}
        height={40}
      />
    </header>
  );
}

export default Navbar;
