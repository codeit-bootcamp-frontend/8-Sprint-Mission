import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "@components/Layout/scss/Header.scss";
import Button from "@components/UI/jsx/Button";

import logo from "@assets/common/logo.svg";
import logoMobile from "@assets/common/logo-mobile.svg";

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
            <NavLink to="/404" className="header__navLink" style={getLinkStyle}>
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
          <Button to="/login" size="small" height="48" innerText="로그인" />
        </nav>
      </header>
    </>
  );
}

export default Header;
