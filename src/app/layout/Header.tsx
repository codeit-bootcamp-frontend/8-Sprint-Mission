import { Link, NavLink, useLocation } from 'react-router-dom';
import './Header.scss';
import logo from '@/asset/logo/icon_logo.png';

function AppHeader() {
  const location = useLocation();

  const highlightCommunity = ({ isActive }: { isActive: boolean }) => (isActive ? { color: 'var(--blue)' } : undefined);

  const highlightItems = ({ isActive }: { isActive: boolean }) =>
    location.pathname === '/additem' || isActive ? { color: 'var(--blue)' } : undefined;

  return (
    <header className='app-header'>
      <Link to='/' className='headerLogo' aria-label='홈으로 이동'>
        <img src={logo} alt='판다마켓 로고' />
      </Link>

      <nav>
        <NavLink to='/community' style={highlightCommunity}>
          자유게시판
        </NavLink>

        <NavLink to='/items' style={highlightItems}>
          중고마켓
        </NavLink>
      </nav>

      <Link to='/login' className='button login'>
        로그인
      </Link>
    </header>
  );
}

export default AppHeader;
