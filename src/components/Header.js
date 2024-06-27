import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <div className="header-wrap">
          <div className="header-left">
            <h1>
              <Link to="/" className="pc-tab-logo">
                <img src="/images/logo-small.png" alt="판다마켓 로고" />
              </Link>
              <Link to="/" className="mo-logo">
                <img src="/images/logo-txt.png" alt="판다마켓 로고" />
              </Link>
            </h1>
            <nav className="gnb">
              <ul>
                <li>
                  <Link to="#">자유게시판</Link>
                </li>
                <li>
                  <Link to="/Items" className="on">
                    중고마켓
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-button">
            <Link to="/Login" className="login-btn">
              로그인
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
