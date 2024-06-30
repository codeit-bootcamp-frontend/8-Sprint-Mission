import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
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
                  <Link
                    to="/Items"
                    className={
                      location.pathname === "/Items" ||
                      location.pathname === "/AddItem"
                        ? "on"
                        : ""
                    }
                  >
                    중고마켓
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-button">
            {location.pathname === "/AddItem" ? (
              <button type="button" className="profile-btn">
                <img src="/images/i-profile.png" alt="프로필 이미지" />
              </button>
            ) : (
              <Link to="/Login" className="login-btn">
                로그인
              </Link>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
