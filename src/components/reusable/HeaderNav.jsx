import { Link } from "react-router-dom";

import logoImg from "../../assets/images/logo.svg";
import logoTxt from "../../assets/images/logo-txt.svg";
import "../../assets/styles/header-nav.css";
import NavButton from "./NavButton";

function HeaderNav({ path }) {
  return (
    <header className="header-container">
      <div className="header-nav">
        <Link to="/" className="header-logo">
          <img src={logoImg} />
          <img src={logoTxt} />
        </Link>
        {path === "/items" && (
          <div className="nav-menus">
            <NavButton className="nav-forum">자유게시판</NavButton>
            <NavButton path={path} className="nav-items">
              중고마켓
            </NavButton>
          </div>
        )}
        <Link to="/auth" state={{ isLogin: true }}>
          <span className="header-login">로그인</span>
        </Link>
      </div>
    </header>
  );
}

export default HeaderNav;
