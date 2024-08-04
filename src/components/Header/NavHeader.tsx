import logoImg from "src/assets/logo@2x.png";
import logoText from "src/assets/logo_text@2x.png";
import "src/index.css";
import { Link, useLocation } from "react-router-dom";
import KaKaoLogo from "src/assets/kakao_logo@3x.png";
import useMediaQuery from "src/utils/useQueryMedia";
import { HeaderContainer, HeaderWrapper, NavItem, NavList } from "./styled";

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

function NavHeader() {
  const { pathname } = useLocation();

  const authUser = pathname === "/additem";

  return (
    <>
      <HeaderContainer>
        <HeaderWrapper>
          <Link to="/">
            <HeaderLogo />
          </Link>
          <NavList className="nav-bar">
            <NavItem to="/notices">자유게시판</NavItem>
            <NavItem to="/items">중고마켓</NavItem>
          </NavList>
          {authUser ? (
            <img width="40" height="40" src={KaKaoLogo} alt="user icon" />
          ) : (
            <a className="header__login" href="/login">
              로그인
            </a>
          )}
        </HeaderWrapper>
      </HeaderContainer>
    </>
  );
}

export default NavHeader;
