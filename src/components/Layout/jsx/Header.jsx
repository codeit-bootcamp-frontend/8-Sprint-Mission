import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "../scss/Header.scss";

import logo from "../../../assets/common/logo.svg";
import logoMobile from "../../../assets/common/logo-mobile.svg";

function getLinkStyle({ isActive }) {
  return {
    color: isActive ? `var(--brand-blue)` : `var(--gray-600)`,
  };
}

function Header() {
  const currentLocation = useLocation();

  return (
    <>
      <header className="header">
        <nav className="header__gnb">
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
          <div className="header__nav">
            <NavLink to="/" className="header__navLink" style={getLinkStyle}>
              자유게시판
            </NavLink>
            <NavLink
              to="/items"
              className="header__navLink"
              style={() => {
                const isActive =
                  currentLocation.pathname === "/items" ||
                  currentLocation.pathname === "/additem";
                return getLinkStyle({ isActive });
              }}
            >
              중고마켓
            </NavLink>
          </div>
          <Link to="/login" className="globalBtn globalBtn--small">
            로그인
          </Link>
        </nav>
      </header>
    </>
  );
}

export default Header;
