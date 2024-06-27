import { Link, NavLink } from "react-router-dom";

import "./Nav.css";
import logoIcon from "../assets/images/Img_logo_icon.png";
import logoText from "../assets/images/Img_logo_text.png";

function Nav() {
  return (
    <nav>
      <div className="logo-menu-wrapper">
        <Link className="logo-wrapper" to="/">
          <img
            className="logo-icon"
            src={logoIcon}
            alt="판다마켓 로고 중 아이콘"
          />
          <img
            className="logo-text"
            src={logoText}
            alt="판다마켓 로고 중 텍스트"
          />
        </Link>

        <div className="menu-wrapper">
          <NavLink
            className={({ isActive }) => (isActive ? "menu active" : "menu")}
            to="/forum"
          >
            자유게시판
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "menu active" : "menu")}
            to="/items"
          >
            중고마켓
          </NavLink>
        </div>
      </div>

      <Link className="login-link" to="/login">
        로그인
      </Link>
    </nav>
  );
}

export default Nav;
