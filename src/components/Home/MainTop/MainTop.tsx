import React from 'react';
import "./MainTop.css";
import { Link } from "react-router-dom";

interface MainTopDetails {
  imgUrl: string;
  mainTopContent: string;
  buttonContent: string;
}

interface MainTopProps {
  mainTopDetails: MainTopDetails;
}

const MainTop: React.FC<MainTopProps> = ({ mainTopDetails }) => {
  const { imgUrl, mainTopContent, buttonContent } = mainTopDetails;

  return (
    <section className="main-top-background">
      <div className="main-top-content-container">
        <div className="main-top-details-container">
          <p className="main-top-content">{mainTopContent}</p>
          <Link to="/items">
            <button className="main-top-button">{buttonContent}</button>
          </Link>
        </div>
        <img className="main-top-img" src={imgUrl} alt="홈페이지 상단 이미지" />
      </div>
    </section>
  );
}

export default MainTop;
