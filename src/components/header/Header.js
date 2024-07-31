import './Header.css';
import logo from '../../images/logo1.png';
import { Link, NavLink } from 'react-router-dom';

function getLinkStyle({ isActive }) {
  return {
    color: isActive ? 'var(--blue)' : undefined,
  };
}

function Header() {
  return (
    <header>
      <div className="header-left">
        <Link to="/" className="home-button">
          <img src={logo} alt="로고" />
        </Link>
        <ul className="nav-box">
          <li>
            <NavLink to="/board" style={getLinkStyle} className="nav-item">
              자유게시판
            </NavLink>
          </li>
          <li>
            <NavLink to="/items" style={getLinkStyle} className="nav-item">
              중고마켓
            </NavLink>
          </li>
        </ul>
      </div>
      <Link to="/login" className="login-button">
        로그인
      </Link>
    </header>
  );
}

export default Header;
