import { Link, NavLink, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../logo.svg';

function Header() {
  const location = useLocation();
  const highlightCommunity = ({ isActive }) => (isActive ? { color: 'var(--blue)' } : {});
  const highlightItems = ({ isActive }) =>
    location.pathname === '/additem' || isActive ? { color: 'var(--blue)' } : {};

  return (
    <header className='globalHeader'>
      <Link to='/' className='headerLogo' aria-label='홈으로 이동'>
        <img src={logo} alt='판다마켓 로고' />
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink to='/community' style={highlightCommunity}>
              자유게시판
            </NavLink>
          </li>
          <li>
            <NavLink to='/items' style={highlightItems}>
              중고마켓
            </NavLink>
          </li>
        </ul>
      </nav>
      <Link to='/login' className='login button'>
        로그인
      </Link>
    </header>
  );
}

export default Header;
