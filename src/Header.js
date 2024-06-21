import './Header.css';
import logo from './images/logo1.png';

function Header() {
  return (
    <header>
      <a href="/" className="home-button">
        <img src={logo} alt="로고" />
      </a>
      <div className="nav-box">
        <a href="/#" className="nav-item">
          자유게시판
        </a>
        <a href="/items" className="nav-item">
          중고마켓
        </a>
      </div>
      <a href="/login" className="login-button">
        로그인
      </a>
    </header>
  );
}

export default Header;
