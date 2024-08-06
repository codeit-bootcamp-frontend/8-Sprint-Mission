import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Button from '../Button/LinkButton';
import NAVIGATION_LIST from '../../utils/NAVIGATION_LIST';
import styles from './Header.module.css';
import logo from '../../assets/images/logo.png';
import mobileLogo from '../../assets/images/mobile_logo.png';
import profileImg from '../../assets/images/profile@2.png';

interface HeaderProps {
  isActive: boolean;
  to: string;
}

export default function Header() {
  const location = useLocation();
  const [tempLogin, setTempLogin] = useState<boolean>(false);

  const getLocationActive = ({ isActive, to }: HeaderProps) => {
    const activeMenu =
      (location.pathname === '/items' || location.pathname === '/additem') &&
      (to === 'items' || to === 'additem');

    if (activeMenu) return styles.active;

    return isActive ? styles.active : undefined;
  };

  useEffect(() => {
    setTempLogin(location.pathname === '/additem');
  }, [location]);

  const navList = NAVIGATION_LIST.map(list => (
    <li key={list.name}>
      <NavLink
        to={list.path}
        className={({ isActive }) =>
          getLocationActive({ isActive, to: list.path })
        }
      >
        {list.name}
      </NavLink>
    </li>
  ));

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
            <ul>{navList}</ul>
          </div>
        </div>
        {tempLogin ? (
          <Link to="/">
            <img
              className={styles.profile}
              src={profileImg}
              alt="사용자 프로필"
            ></img>
          </Link>
        ) : (
          <Button path="/signin" btnName="로그인" />
        )}
      </div>
    </header>
  );
}
