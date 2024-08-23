import Logo from "../images/logo/logo.svg";
import style from "./Header.module.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import loginIMage from "../images/logo/ic_profile.svg";

interface GetLinkStyleProps {
  isActive: boolean;
}

export function getLinkStyle({ isActive }: GetLinkStyleProps) {
  return {
    color: isActive ? "#3692ff" : "",
    textDecoration: isActive ? "none" : "",
  };
}

const Header = () => {
  const location = useLocation();

  const isLogIn = localStorage.getItem("accessToken");

  switch (location.pathname) {
    case "/login":
    case "/signup":
      return null;

    default:
      return (
        <header className={style.mainHeader}>
          <div className={style.leftHeader}>
            <Link to={"/"}>
              <img className={style.headerLogo} src={Logo} alt="판다마켓로고" />
            </Link>
            <nav>
              <ul className={style.headusedmarket}>
                <NavLink
                  className={style.usedmarket}
                  to="/community"
                  style={({ isActive }) =>
                    isActive ? { color: "#3692ff", textDecoration: "none" } : {}
                  }
                >
                  <li>자유게시판</li>
                </NavLink>

                <NavLink
                  className={style.usedmarket}
                  to="/items"
                  style={({ isActive }) =>
                    location.pathname === "/additem" || isActive
                      ? { color: "#3692ff", textDecoration: "none" }
                      : {}
                  }
                >
                  <li>중고마켓</li>
                </NavLink>
              </ul>
            </nav>
          </div>
          {isLogIn ? (
            <img src={loginIMage} alt="로그인이미지" />
          ) : (
            <Link to="/login" className={style.loginbutton}>
              로그인
            </Link>
          )}
        </header>
      );
  }
};

export default Header;
