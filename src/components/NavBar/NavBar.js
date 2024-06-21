import '../NavBar/NavBar.css';
import logoLarge from '../../assets/images/logo/logo.png';
import logoSmall from '../../assets/images/logo/mini_logo.png';

function NavBar(props) {
  console.log(props);
  const pageType = props.page;
  return (
    <header>
      <div className="header-nav">
        <div className="logo-and-links">
          <a href="/">
            <picture>
              <source srcSet={logoSmall} media="(max-width: 767px)" className="logo-for-phone" />
              <img src={logoLarge} alt="판다마켓 로고" className="logo-for-screen" />
            </picture>
          </a>
          <div className="nav-links-box">
            <a href="/boards" className="nav-link">
              자유게시판
            </a>
            <a href="/items" className={`nav-link ${pageType}`}>
              중고마켓
            </a>
          </div>
        </div>
        <a href="/login.html" className="login-btn">
          로그인
        </a>
      </div>
    </header>
  );
}
export default NavBar;
