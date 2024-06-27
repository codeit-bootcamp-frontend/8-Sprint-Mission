import "../styles/components/Header.css";

import logoWithTypoImgUrl from "../assets/logo_with_typo.png";
import onlyTypoImgUrl from "../assets/logo_typo.png";

import { Link } from "react-router-dom";

/**
 * pageType에 따라서 알맞는 header element를 return
 * @param {string} pageType - main, item
 * @returns {element} - header element
 */
function Header({ pageType = "main" }) {
  const buttonClassName = `blue-button login-link-button ${pageType}`;
  return (
    <header>
      <div className="header-left-container">
        <Link to="/">
          <img
            className="header-logo-img"
            src={logoWithTypoImgUrl}
            alt="판다마켓 로고"
          />
          <img
            className="header-typo-img"
            src={onlyTypoImgUrl}
            alt="판다마켓 로고"
          />
        </Link>
        {pageType === "item" && (
          <div className="item-page-header-nav">
            <div className="free-board-link">자유게시판</div>
            <div className="used-market-link active">중고마켓</div>
          </div>
        )}
      </div>
      <Link to="/login">
        <button className={buttonClassName}>로그인</button>
      </Link>
    </header>
  );
}

export default Header;
