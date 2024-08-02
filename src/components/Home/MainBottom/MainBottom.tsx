import React from 'react';
import "./MainBottom.css";

interface MainBottomDetails {
  imgUrl: string;
  mainBottomContent: string;
}

interface MainBottomProps {
  mainBottomDetails: MainBottomDetails;
}

const MainBottom: React.FC<MainBottomProps> = ({ mainBottomDetails }) => {
  const { imgUrl, mainBottomContent } = mainBottomDetails;

  return (
    <section className="main-bottom-background">
      <div className="main-bottom-content-container">
        <p className="main-bottom-content">{mainBottomContent}</p>
        <img
          className="main-bottom-img"
          src={imgUrl}
          alt="홈페이지 하단 이미지"
        />
      </div>
    </section>
  );
}

export default MainBottom;
