import React from "react";
import Logo from "@/assets/images/logo/logo.svg";
import Image from "next/image";
// import styled from "styled-components";
import Link from "next/link";
import styles from "@/components/Header.module.css";
import { useRouter } from "next/router";

function getLinkStyle(isActive: boolean) {
  return { color: isActive ? "var(--blue)" : undefined };
}

export default function Header() {
  const router = useRouter(); // 현재 경로 정보

  return (
    <div className={styles.globalHeader}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLeft}>
          <div className={styles.headerLogo}>
            <Link className={styles.Logo} href="/" aria-label="홈으로 이동">
              <Logo />
              {/* <Image src={Logo} alt="판다마켓 로고" width={153} /> */}
            </Link>
          </div>

          <nav>
            <ul className={styles.navLinksContainer}>
              <li className={styles.navLinks}>
                <Link
                  href="/community"
                  style={getLinkStyle(router.pathname === "/community")}
                >
                  자유게시판
                </Link>
              </li>
              <li className={styles.navLinks}>
                <Link
                  href="/items"
                  style={getLinkStyle(
                    router.pathname === "/items" ||
                      router.pathname === "/additem"
                  )}
                >
                  중고마켓
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <Link className={styles.button} href="/login">
          로그인
        </Link>
      </div>
    </div>
  );
}
