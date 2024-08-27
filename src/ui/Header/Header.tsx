import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import LinkButton from "../Button/LinkButton";
import styles from "./Header.module.css";
import logo from "../../assets/images/logo.png";
import mobileLogo from "../../assets/images/mobile_logo.png";
import profileImg from "../../assets/images/profile@2.png";
import AuthContext from "../../store/AuthContext";
import NavList from "../NavList/NavList";

export default function Header() {
  const authCtx = useContext(AuthContext);
  const [isOpenLogout, setIsOpenLogout] = useState<boolean>(false);

  const handleLogout = () => {
    authCtx.logout();
    setIsOpenLogout(false);
  };

  const handleOpenLogout = () => {
    setIsOpenLogout((prevIsOpen) => !prevIsOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.mainHeader}>
        <div className={styles.headerNav}>
          <div className={styles.logoBox}>
            <NavLink to="/" className={styles.logo}>
              <img src={logo} alt="판다마켓 로고" />
            </NavLink>
            <NavLink to="/" className={styles.mobileLogo}>
              <img src={mobileLogo} alt="판다마켓 모바일 로고" />
            </NavLink>
          </div>
          <div className={styles.navList}>
            <NavList />
          </div>
        </div>
        {authCtx.isLoggedIn ? (
          <div onClick={handleOpenLogout}>
            <img
              className={styles.profile}
              src={profileImg}
              alt="사용자 프로필"
            />
          </div>
        ) : (
          <LinkButton to="/signin" btnName="로그인" />
        )}
        {isOpenLogout && (
          <div onClick={handleLogout} className={styles.logoutContainer}>
            <button className={styles.logoutBtn}>로그아웃</button>
          </div>
        )}
      </div>
    </header>
  );
}
