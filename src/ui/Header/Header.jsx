import { NavLink } from 'react-router-dom';
import Button from '../Button/Button.jsx';
import NAVIGATION_LIST from '../../utils/NAVIGATION_LIST.js';
import styles from './Header.module.css';
import logo from '../../assets/images/logo.png';
import mobileLogo from '../../assets/images/mobile_logo.png';

export default function Header() {
  const navList = NAVIGATION_LIST.map(list => (
    <li key={list.name}>
      <NavLink
        to={list.path}
        className={({ isActive }) => (isActive ? styles.active : undefined)}
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
        <Button path="/login" btnName="로그인" />
      </div>
    </header>
  );
}
