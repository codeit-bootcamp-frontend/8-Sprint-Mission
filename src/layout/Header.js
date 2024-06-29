import Nav from './../components/Nav';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="fixed">
      <div className="header-wrap">
        <Link to="/" className="logo">
          <h1 className="sr-only">판다마켓</h1>
        </Link>
        <Nav />
        <Link to="/login" className="btn-sm btn-primary">
          로그인
        </Link>
      </div>
    </header>
  );
}

export default Header;
