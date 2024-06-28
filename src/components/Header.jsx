import React from "react";
import logoImg from "../assets/logo@2x.png";
import logoText from "../assets/logo_text@2x.png";
import "../index.css";
import { useLocation } from "react-router-dom";
import KaKaoLogo from "../assets/kakao_logo@3x.png";
import useMediaQuery from "../utils/useQueryMedia";

function HeaderLogo() {
  const isNotMobile = useMediaQuery("(min-width: 767px)");

  return (
    <>
      {isNotMobile ? (
        <img
          className="header__desktop-img"
          src={logoImg}
          alt="logo"
          width="153"
          height="51"
        />
      ) : (
        <img
          className="header__mobile-img"
          src={logoText}
          alt="logo"
          width="103"
          height="35"
        />
      )}
    </>
  );
}

function Header() {
  const { pathname } = useLocation();

  const navBarActive =
    pathname === "/items" || pathname === "/additem" ? "nav-bar--active" : "";
  const authUser = pathname === "/additem";

  return (
    <>
      <header className="header">
        <a className="header__logo" href="/">
          <HeaderLogo />
        </a>
        {pathname !== "/" && (
          <nav className="nav-bar">
            <li>자유게시판</li>
            <li className={navBarActive}>중고마켓</li>
          </nav>
        )}
        {authUser ? (
          <img width="40" height="40" src={KaKaoLogo} alt="user icon" />
        ) : (
          <a className="header__login" href="/login">
            로그인
          </a>
        )}
      </header>
    </>
  );
}

export default Header;
