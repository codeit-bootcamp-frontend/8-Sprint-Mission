import Logo from "../../assets/logo.svg";
import styles from "./Navbar.module.css";
import "../../style/global.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import Profile from "../../assets/ic_profile.svg";

function getLinkStyle(isActive: boolean) {
  return {
    color: isActive ? "#3692FF" : "#4B5563",
    textDecoration: "none",
  };
}

function Navbar() {
  const location = useLocation();
  const isActive =
    location.pathname === "/additem" || location.pathname === "/items";

  const accessToken = localStorage.getItem("accessToken");

  return (
    <header>
      <Link to="/">
        <img className={styles.logo} src={Logo} alt="logo" />
      </Link>
      <div className={styles.menu}>
        <div className={styles.board}>자유게시판</div>
        <div className={styles.market}>
          <NavLink style={getLinkStyle(isActive)} to="/items">
            중고마켓
          </NavLink>
        </div>
      </div>
      {accessToken ? (
        <img className={styles.profile} src={Profile} alt="프로필 이미지" />
      ) : (
        <Link to="/login">
          <button className={styles.button}>로그인</button>
        </Link>
      )}
    </header>
  );
}

export default Navbar;
