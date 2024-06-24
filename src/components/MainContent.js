import "../styles/components/MainContent.css";

function MainContent({ contentDetail }) {
  const {
    imgUrl,
    title,
    mainContent,
    subContent,
    align = "left",
  } = contentDetail;

  return (
    <div className={"main-content-container " + align}>
      <img
        className="main-content-img"
        src={imgUrl}
        alt={"홈페이지 메인 " + title + " 이미지"}
      />
      <div className={"main-content-details-container " + align}>
        <h2 className="content-title">{title}</h2>
        <div className="main-content">{mainContent}</div>
        <div className="sub-content">{subContent}</div>
      </div>
    </div>
  );
}

export default MainContent;
