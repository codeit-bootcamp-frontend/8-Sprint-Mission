import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import logoSvg from "assets/svg/logo-with-text.svg";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrap}>
        <Link to="/">
          <img className={styles.logo} src={logoSvg} alt="" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
