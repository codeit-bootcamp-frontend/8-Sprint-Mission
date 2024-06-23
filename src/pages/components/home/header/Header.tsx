import React from "react";
import RoutePath from "RoutePath";
import styles from "./Header.module.scss";
import logoImg from "assets/svg/logo.svg";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const logo = {
    src: logoImg,
    width: 153,
    height: 51,
    alt: "홈으로",
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrap}>
          <ul className={styles.list}>
            <li>
              <Link to={RoutePath.home}>
                <img
                  src={logo.src}
                  width={logo.width}
                  height={logo.height}
                  alt={logo.alt}
                />
              </Link>
            </li>
            <li>
              <Link to={RoutePath.signIn}>
                <button>로그인</button>
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
