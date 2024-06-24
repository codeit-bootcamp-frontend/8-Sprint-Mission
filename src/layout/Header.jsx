import './Header.css';
import logo from '../logo.svg';

function Header() {
  return (
    <header className='globalHeader'>
      <div className='navLeft'>
        <a href='/' className='headerLogo' aria-label='홈으로 이동'>
          <img src={logo} alt='판다마켓 로고' />
        </a>

        <nav>
          <ul>
            <li>
              <a href='/community'>자유게시판</a>
            </li>
            <li>
              <a href='/items'>중고마켓</a>
            </li>
          </ul>
        </nav>
      </div>

      <a href='login' className='login button'>
        로그인
      </a>
    </header>
  );
}

export default Header;
