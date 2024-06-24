import { useEffect, useState } from 'react';
import imgPandaMarketLogo from '../../assets/images/logo/panda-market-logo.png';
import './NavigationBar.css';

function NavigationBar() {
  return (
    <header className="navbar">
      <div className="navbarLeft">
        <a href="/">
          <img
            className="navbarHomeLogo"
            src={imgPandaMarketLogo}
            alt="판다마켓 홈"
          />
        </a>
        <nav className="navbarMenu">
          <ol>
            <li className="navbarMenuItem navbar-menu-board">
              <a href="/board" value="board">
                자유게시판
              </a>
            </li>
            <li className="navbarMenuItem navbar-menu-items">
              <a href="/items" value="items">
                중고마켓
              </a>
            </li>
          </ol>
        </nav>
      </div>
      <a href="/signin" id="login-link-button" className="button">
        로그인
      </a>
    </header>
  );
}

export default NavigationBar;
