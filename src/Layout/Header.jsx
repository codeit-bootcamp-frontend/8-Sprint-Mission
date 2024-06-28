import React from "react";
import Logo from "../images/logo/logo.svg";
import "./Header.css";
import { NavLink, useLocation } from "react-router-dom";

export function getLinkStyle({ isActive }) {
  return {
    color: isActive ? "#3692ff" : "",
    textDecoration: isActive ? "none" : "",
  };
}

function Header() {
  const location = useLocation();

  return (
    <header className="mainHeader">
      <div className="leftHeader">
        <img className="headerLogo" src={Logo} alt="판다마켓로고" />
        <nav>
          <ul className="headusedmarket">
            <li className="usedmarket">자유게시판</li>
            <li className="usedmarket">
              <NavLink
                to="/items"
                style={({ isActive }) =>
                  location.pathname === "/additem" || isActive
                    ? { color: "#3692ff", textDecoration: "none" }
                    : {}
                }
              >
                중고마켓
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="loginbutton">로그인</div>
    </header>
  );
}

export default Header;
