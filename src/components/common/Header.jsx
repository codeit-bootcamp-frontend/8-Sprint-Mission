import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo_pandamarket.png";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="gnb-wrap">
        <Link to="/" className="logo-link">
          <img src={logo} className="logo" />
        </Link>
        <ul className="gnb">
          <li>
            <Link to="/Community" className="gnb-community">
              자유게시판
            </Link>
          </li>
          <li>
            <Link to="/Items" className="gnb-market">
              중고마켓
            </Link>
          </li>
        </ul>
      </div>
      <Link to="/SignIn" className="login-btn">
        로그인
      </Link>
    </header>
  );
}

export default Header;
