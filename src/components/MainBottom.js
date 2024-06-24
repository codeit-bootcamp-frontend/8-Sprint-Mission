import "../styles/components/MainBottom.css";

function MainBottom({ mainBottomDetails }) {
  const { imgUrl, mainBottomContent } = mainBottomDetails;

  return (
    <div className="main-bottom-background">
      <div className="main-bottom-content-container">
        <div className="main-bottom-content">{mainBottomContent}</div>
        <img
          className="main-bottom-img"
          src={imgUrl}
          alt="홈페이지 하단 이미지"
        />
      </div>
    </div>
  );
}

export default MainBottom;
