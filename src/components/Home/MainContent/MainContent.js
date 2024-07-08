import "./MainContent.css";

function MainContent({ contentDetail }) {
  const {
    imgUrl,
    title,
    mainContent,
    subContent,
    align = "left",
  } = contentDetail;

  return (
    <section className={"main-content-container " + align}>
      <img
        className="main-content-img"
        src={imgUrl}
        alt={"홈페이지 메인 " + title + " 이미지"}
      />
      <div className={"main-content-details-container " + align}>
        <h2 className="content-title">{title}</h2>
        <p className="main-content">{mainContent}</p>
        <p className="sub-content">{subContent}</p>
      </div>
    </section>
  );
}

export default MainContent;
