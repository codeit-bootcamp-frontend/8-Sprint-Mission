import Logo from "../image/logo/logo.svg";
import Profile from "../image/icons/ic_profile.svg";
import style from "./Header.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const router = useRouter();

  return (
    <header className={style.mainHeader}>
      <div className={style.leftHeader}>
        <Link href="/">
          <Logo className={style.headerLogo} alt="판다마켓로고" />
        </Link>
        <nav>
          <ul className={style.headusedmarket}>
            <Link href="/boards">
              <li className={style.usedmarket}>자유게시판</li>
            </Link>
            <li className={style.usedmarket}>
              <Link href="/Items">중고마켓</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Profile className={style.loginbutton} />
    </header>
  );
};

export default Header;
