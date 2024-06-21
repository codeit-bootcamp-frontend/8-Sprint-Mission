import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../images/logo/logo1x.png";
import "./Header.css";
const connectLink = ({ isActive }) => {
  return { color: isActive ? "var(--brand-blue)" : undefined };
};

function Header() {
  return (
    <header>
      <div className="header-link-box">
        <Link to="/" className="header-logo-link">
          <img src={Logo} alt="logo" className="header-logo" />
        </Link>
        <ul>
          <li>
            <NavLink to="#">자유게시판</NavLink>
          </li>
          <li>
            <NavLink to="/items" style={connectLink}>
              중고마켓
            </NavLink>
          </li>
        </ul>
      </div>
      <Link to="#" className="login-btn button">
        로그인
      </Link>
    </header>
  );
}

export default Header;
