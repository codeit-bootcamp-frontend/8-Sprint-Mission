import './Header.css';
import logo from '../../images/logo1.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to="/" className="home-button">
        <img src={logo} alt="로고" />
      </Link>
      <ul className="nav-box">
        <li>
          <Link to="" className="nav-item">
            자유게시판
          </Link>
        </li>
        <li>
          <Link to="/items" className="nav-item">
            중고마켓
          </Link>
        </li>
      </ul>
      <Link to="/login" className="login-button">
        로그인
      </Link>
    </header>
  );
}

export default Header;
