function Header() {
  return (
    <header className="fixed">
      <div className="header-wrap">
        <a href="/" className="logo">
          <h1 className="sr-only">판다마켓</h1>
        </a>
        <ul className="nav">
          <li><a href="#" className="nav-link">자유게시판</a></li>
          <li><a href="#" className="nav-link active">중고마켓</a></li>
        </ul>
        <a href="/login.html" className="btn-sm btn-primary">로그인</a>
      </div>
    </header>
  );
}

export default Header;
