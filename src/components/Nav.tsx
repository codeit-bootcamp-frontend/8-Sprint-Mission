import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

import "./Nav.css";
import logoIcon from "../assets/images/Img_logo_icon.png";
import logoText from "../assets/images/Img_logo_text.png";
import profileImg from "../assets/images/ic_profile.png";

const getNavLinkClassName = (isActive: boolean) =>
  isActive ? "menu active" : "menu";

function Nav() {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  return (
    <nav>
      {!isLogin ? (
        <>
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
          </div>
          <Link className="login-link" to="/login">
            로그인
          </Link>
        </>
      ) : (
        <>
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
                className={({ isActive }) => getNavLinkClassName(isActive)}
                to="/forum"
              >
                자유게시판
              </NavLink>
              <NavLink
                className={({ isActive }) => getNavLinkClassName(isActive)}
                to="/items"
              >
                중고마켓
              </NavLink>
            </div>
          </div>

          <img
            src={profileImg}
            alt="프로필 이미지"
            width="40px"
            height="40px"
          />
        </>
      )}
    </nav>
  );
}

export default Nav;
