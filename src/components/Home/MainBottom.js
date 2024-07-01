import "../../styles/components/Home/MainBottom.css";

function MainBottom({ mainBottomDetails }) {
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
