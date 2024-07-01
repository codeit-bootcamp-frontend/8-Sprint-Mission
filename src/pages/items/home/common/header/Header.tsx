import logoSvg from "assets/svg/logo.svg";
import logoWithTextSvg from "assets/svg/logo-with-text.svg";
import React, { useEffect } from "react";
import RoutePath from "RoutePath";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  const logoSrc = width < 768 ? logoSvg : logoWithTextSvg;

  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrap}>
          <ul className={styles.list}>
            <li>
              <Link to={RoutePath.home}>
                <img className={styles.logo} src={logoSrc} alt="" />
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/free">
                자유게시판
              </Link>
              <Link className={styles.link} to="/items">
                중고거래
              </Link>
            </li>
            <li>
              <Link to={RoutePath.signIn}>
                <button className={`${styles.signIn} primary`}>로그인</button>
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
