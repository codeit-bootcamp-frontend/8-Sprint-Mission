import "./Nav.css";
import Menu from "./Menu";
import logoIcon from "../assets/images/Img_logo_icon.png";
import logoText from "../assets/images/Img_logo_text.png";

function Nav({ currentMenu, handleMenuClick }) {
  return (
    <nav>
      <div className="logo-Menu-wrapper">
        <a className="logo-wrapper" href="/">
          <img
            className="logo-icon"
            src={logoIcon}
            alt="판다마켓 로고 중 아이콘"
          />
          <img
            className="logo-text"
            src={logoText}
            alt="판다마켓 로고 중 텍스트"
          />
        </a>

        <Menu
          href="#"
          className={`forum ${currentMenu === "#" ? "active" : ""}`}
          name="자유게시판"
          onClick={handleMenuClick("#")}
        />
        <Menu
          href="/items"
          className={`used-market ${currentMenu === "/items" ? "active" : ""}`}
          name="중고마켓"
          onClick={handleMenuClick("/items")}
        />
      </div>

      <a className="login-link" href="/login">
        로그인
      </a>
    </nav>
  );
}

export default Nav;
