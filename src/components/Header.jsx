import React from "react";
import logoImg from "../assets/logo@2x.png";
import logoText from "../assets/logo_text@2x.png";
import "../index.css";
import { useLocation } from "react-router-dom";

function Header() {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <>
      <header className="header">
        <a className="header__logo" href="/">
          <img
            className="header__desktop-img"
            src={logoImg}
            alt="logo"
            width="153"
            height="51"
          />
          <img
            className="header__mobile-img"
            src={logoText}
            alt="logo"
            width="103"
            height="35"
          />
        </a>
        <nav className={`nav-bar ${pathname === "/" ? "hidden" : ""}`}>
          <li>자유게시판</li>
          <li className={pathname === "/items" ? "nav-bar--active" : ""}>
            중고마켓
          </li>
        </nav>
        <a className="header__login" href="/login">
          로그인
        </a>
      </header>
    </>
  );
}

export default Header;
