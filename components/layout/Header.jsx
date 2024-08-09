import Link from "next/link";
import Nav from "../ui/Nav";
import styles from "./Header.module.scss";
import LinkButton from "../ui/LinkButton";

function Header() {
  return (
    <header className={`${styles.header} ${styles.fixed}`}>
      <div className={styles["header-wrap"]}>
        <Link href="/" className={styles.logo}>
          <h1 className="sr-only">판다마켓</h1>
        </Link>
        <Nav />
        <LinkButton href="/login" size="sm" color="primary">
          로그인
        </LinkButton>
      </div>
    </header>
  );
}

export default Header;
