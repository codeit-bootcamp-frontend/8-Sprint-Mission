import { Link, NavLink } from "react-router-dom";

import logoImg from "../../assets/images/logo.svg";
import logoTxt from "../../assets/images/logo-txt.svg";
import "../../assets/styles/header-nav.css";
import styled from "styled-components";

function HeaderNav() {
  return (
    <header className="header-container">
      <div className="header-nav">
        <NavLink to="/" className="header-logo">
          <img src={logoImg} />
          <img src={logoTxt} />
        </NavLink>

        <div className="nav-menus">
          <NavLinkButton to="/forum">자유게시판</NavLinkButton>

          <NavLinkButton to="/items">중고마켓</NavLinkButton>
        </div>
        <Link to="/auth" state={{ isLogin: true }}>
          <span className="header-login">로그인</span>
        </Link>
      </div>
    </header>
  );
}

export default HeaderNav;

const NavLinkButton = styled(NavLink)`
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  padding-left: 39px;
  &.active {
    color: var(--blue);
  }
  @media (max-width: 764px) {
    padding: 0;
    font-size: 16px;
  }
`;
