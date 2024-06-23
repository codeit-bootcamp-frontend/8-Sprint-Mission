function Header() {
  return (
    <>
      <header>
        <div className="header-wrap">
          <div className="header-left">
            <h1>
              <a href="/" className="pc-tab-logo">
                <img src="/images/logo-small.png" alt="판다마켓 로고" />
              </a>
              <a href="/" className="mo-logo">
                <img src="/images/logo-txt.png" alt="판다마켓 로고" />
              </a>
            </h1>
            <nav className="gnb">
              <ul>
                <li>
                  <a href="#n">자유게시판</a>
                </li>
                <li>
                  <a href="#n" className="on">
                    중고마켓
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-button">
            <a href="./login.html" className="login-btn">
              로그인
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
