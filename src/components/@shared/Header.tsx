import logoImg from 'assets/images/home/logoAndTypo.png';

function Header() {
  return (
    <header className="home-header">
      <div className="home-header-wrapper">
        <img src={logoImg} alt={'앱 로고와 이름 이미지'} />
        <button className="header-login move-to-login">로그인</button>
      </div>
    </header>
  );
}

export default Header;
