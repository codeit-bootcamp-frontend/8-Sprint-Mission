import "../styles/components/MainTop.css";

import { Link } from "react-router-dom";

function MainTop({ mainTopDetails }) {
  const { imgUrl, mainTopContent, buttonContent } = mainTopDetails;

  return (
    <div className="main-top-background">
      <div className="main-top-content-container">
        <div className="main-top-details-container">
          <div className="main-top-content">{mainTopContent}</div>
          <Link to="/items">
            <button className="main-top-button">{buttonContent}</button>
          </Link>
        </div>
        <img className="main-top-img" src={imgUrl} alt="홈페이지 상단 이미지" />
      </div>
    </div>
  );
}

export default MainTop;
