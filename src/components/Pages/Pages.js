import arrowRight from "../../assets/arrow_right.png";
import arrowLeft from "../../assets/arrow_left.png";

function Pages() {
  return (
    <div className="pages-section">
      <div className="pages-btn">
        <img src={arrowLeft}></img>
      </div>
      <div className="pages-btn number-btn current-page">
        <span>1</span>
      </div>
      <div className="pages-btn number-btn">
        <span>2</span>
      </div>
      <div className="pages-btn number-btn">
        <span>3</span>
      </div>
      <div className="pages-btn number-btn">
        <span>4</span>
      </div>
      <div className="pages-btn number-btn">
        <span>5</span>
      </div>
      <div className="pages-btn">
        <img src={arrowRight}></img>
      </div>
    </div>
  );
}

export default Pages;
