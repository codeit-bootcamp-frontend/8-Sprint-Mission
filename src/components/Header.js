import "../styles/components/Header.css";

import headerLogoUrl from "../assets/logo_with_typo.png";

/**
 * pageType에 따라서 알맞는 header element를 return
 * @param {string} pageType - main, item 등에 따라서 header 결정
 * @returns {element} - header element
 */
function Header({ pageType = "main" }) {
  return (
    <header>
      <div className="header-left-menu">
        <img className="logo-img" src={headerLogoUrl} alt="판다마켓 로고" />
        {pageType === "item" && (
          <div className="item-page-header-nav">
            <div className="free-board-link">자유게시판</div>
            <div className="used-market-link active">중고마켓</div>
          </div>
        )}
      </div>
      <button>로그인</button>
    </header>
  );
}

export default Header;
