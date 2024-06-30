import React from "react";
import Logo from "../../assets/images/logo/logo.svg";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

function getLinkStyle({ isActive }) {
  return { color: isActive ? "#3692ff" : undefined };
}

function Header() {
  return (
    <header className="HeaderContainer">
      <div className="Header">
        <Link to="/" className="Logo" aria-label="홈">
          <img src={Logo} alt="판다마켓" width="153" />
        </Link>

        <nav>
          <ul className="HeaderNav">
            <li>
              <NavLink to="/community" style={getLinkStyle}>
                자유게시판
              </NavLink>
            </li>
            <li>
              <NavLink to="/items" style={getLinkStyle}>
                중고 마켓
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <Link to="/login" className="login btn">
        로그인
      </Link>
    </header>
  );
}

export default Header;
