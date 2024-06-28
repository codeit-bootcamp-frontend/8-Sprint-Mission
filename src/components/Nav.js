import "./Nav.css";
import pandaIcon from "../images/logo_image.png";

function Nav() {
  return (
    <div className="nav-container">
      <img className="logo-img" src={pandaIcon} alt="판다마켓 로고" />
      <div className="link-container">
        <a className="link link-community" href="https://www.google.com/">
          자유게시판
        </a>
        <a className="link link-market" href="https://www.google.com/">
          중고마켓
        </a>
      </div>
      <button>로그인</button>
    </div>
  );
}

export default Nav;
