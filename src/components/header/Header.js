import './Header.css';
import logo from '../../images/logo1.png';
import { Link, NavLink } from 'react-router-dom';

function getLinkStyle({ isActive }) {
  return {
    color: isActive ? '#3692ff' : '#4b5563',
  };
}

function Header() {
  return (
    <header>
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
      <Link to="/login" className="login-button">
        로그인
      </Link>
    </header>
  );
}

export default Header;
