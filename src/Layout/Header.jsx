import React from "react";
import Logo from "../images/logo/logo.svg";
import './Header.css';

function Header() {
  return(
    <header className="mainHeader">
      <div className="leftHeader">
      <img src={Logo} alt="판다마켓로고" />
      <nav>
        <ul>
          <li>

          자유게시판

          </li>
          <li>
            <div className="usedmarket">
          중고마켓
          </div>
          </li>
        </ul>
      </nav>
      </div>
      <div className="loginButton">
      로그인
      </div>
    </header>
  );
}

export default Header;