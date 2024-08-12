import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Nav.module.scss";

function getLinkStyle(pathname: string, href: string): string {
  const isActive = pathname === href;
  const isAddItemPage = pathname === "/additem";
  return isActive || isAddItemPage ? styles.active : "";
}

function Nav() {
  const router = useRouter();
  const { pathname } = router;

  return (
    <ul className={styles.nav}>
      <li>
        <Link
          href="/boards"
          className={`${styles["nav-link"]} ${getLinkStyle(
            pathname,
            "/boards"
          )}`}
        >
          자유게시판
        </Link>
      </li>
      <li>
        <Link
          href="/items"
          className={`${styles["nav-link"]} ${getLinkStyle(
            pathname,
            "/items"
          )}`}
        >
          중고마켓
        </Link>
      </li>
    </ul>
  );
}

export default Nav;
