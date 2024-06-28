import React from "react";
import { Link } from "react-router-dom";
import "../scss/Header.scss";

import logo from "../../../assets/common/logo.svg";
import logoMobile from "../../../assets/common/logo-mobile.svg";

function Header() {
  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <Link to="/" className="header__logo--hideAtMobile">
            <img className="header__logoImg" src={logo} alt="LOGO" />
          </Link>
          <Link to="/">
            <img
              className="header__logoImg--mobile"
              src={logoMobile}
              alt="LOGO"
            />
          </Link>
          <Link to="/login" className="globalBtn globalBtn--small">
            로그인
          </Link>
        </nav>
      </header>
    </>
  );
}

export default Header;
