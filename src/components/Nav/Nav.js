import logo from "../../assets/logo.png";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav-section">
      <div className="nav">
        <a href={"/"}>
          <img className="logo" src={logo}></img>
        </a>
        <div className="menu">
          <a>자유게시판</a>
          <a className="current-menu">중고마켓</a>
        </div>
        <a className="login-btn">로그인</a>
      </div>
    </div>
  );
}

export default Nav;
