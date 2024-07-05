import "./Header.css";

import logoWithTypoImgUrl from "../../../assets/images/logo_with_typo.png";
import onlyTypoImgUrl from "../../../assets/images/logo_typo.png";

import userPfpImgUrl from "../../../assets/images/basic_user_pfp_img.png";

import { Link } from "react-router-dom";

/**
 * pageType에 따라서 알맞는 header element를 return
 * @param {string} pageType - main, item
 * @returns {element} - header element
 */
function Header({ pageType = "main", isLogin = false }) {
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
            className={`header-typo-img ${pageType}`}
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
      {isLogin ? (
        <img
          className="user-pfp-img"
          src={userPfpImgUrl}
          alt="유저 프로필 이미지"
        />
      ) : (
        <Link to="/login">
          <button className={buttonClassName}>로그인</button>
        </Link>
      )}
    </header>
  );
}

export default Header;
