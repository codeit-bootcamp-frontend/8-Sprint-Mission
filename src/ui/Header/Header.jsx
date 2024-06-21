import { NavLink } from 'react-router-dom';
import NavigationBtn from '../Button/Button.jsx';
import nav from '../../utils/nav.js';
import styles from './Header.module.css';
import logo from '../../assets/images/logo.png';
import mobileLogo from '../../assets/images/mobile_logo.png';

export default function Header() {
  const navList = nav.map(list => (
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
      <div className={styles.main__header}>
        <div className={styles.header__nav}>
          <div className={styles.logo__box}>
            <NavLink to="/" className={styles.logo}>
              <img src={logo} alt="판다마켓 로고" />
            </NavLink>
            <NavLink to="/" className={styles.mobile__logo}>
              <img src={mobileLogo} alt="판다마켓 모바일 로고" />
            </NavLink>
          </div>
          <div className={styles.nav__list}>
            <ul>{navList}</ul>
          </div>
        </div>
        <NavigationBtn path="/login" btnName="로그인" />
      </div>
    </header>
  );
}
