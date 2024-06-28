import { Link } from "react-router-dom";

import logoImg from "../../assets/images/logo.svg";
import logoTxt from "../../assets/images/logo-txt.svg";
import "../../assets/styles/header-nav.css";
import NavButton from "./NavButton";

function HeaderNav({ nowPath }) {
  return (
    <header className="header-container">
      <div className="header-nav">
        <Link to="/" className="header-logo">
          <img src={logoImg} />
          <img src={logoTxt} />
        </Link>

        <div className="nav-menus">
          <NavButton thisPath="forum" nowPath={nowPath} className="nav-forum">
            자유게시판
          </NavButton>
          <Link to="/items">
            <NavButton thisPath="items" nowPath={nowPath} className="nav-items">
              중고마켓
            </NavButton>
          </Link>
        </div>
        <Link to="/auth" state={{ isLogin: true }}>
          <span className="header-login">로그인</span>
        </Link>
      </div>
    </header>
  );
}

export default HeaderNav;
