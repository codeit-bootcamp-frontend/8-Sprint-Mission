import '../NavBar/NavBar.css';
import logoLarge from '../../assets/images/logo/logo.png';
import logoSmall from '../../assets/images/logo/mini_logo.png';
import { Link, NavLink } from 'react-router-dom';

function getLinkStyle({ isActive }) {
  return {
    color: isActive ? '#3692ff' : 'none',
  };
}

function NavBar() {
  return (
    <header>
      <div className="header-nav">
        <div className="logo-and-links">
          <NavLink to="/">
            <picture>
              <source srcSet={logoSmall} media="(max-width: 767px)" className="logo-for-phone" />
              <img src={logoLarge} alt="판다마켓 로고" className="logo-for-screen" />
            </picture>
          </NavLink>
          <div className="nav-links-box">
            <NavLink to="/boards" className="nav-link" style={getLinkStyle}>
              자유게시판
            </NavLink>
            <NavLink to="/items" className="nav-link" style={getLinkStyle}>
              중고마켓
            </NavLink>
          </div>
        </div>
        <Link to="/login" className="login-btn">
          로그인
        </Link>
      </div>
    </header>
  );
}
export default NavBar;
