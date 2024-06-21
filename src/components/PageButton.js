import "../styles/components/PageButton.css";

import leftBtnImageUrl from "../assets/arrow_left_dark.png";
import rightBtnImageUrl from "../assets/arrow_right_dark.png";

function PageButton({ children, option = "", className = "" }) {
  if (option === "left") {
    return (
      <button className="page-button left-btn">
        <img className="page-arrow-img" src={leftBtnImageUrl} />
      </button>
    );
  } else if (option === "right") {
    return (
      <button className="page-button right-btn">
        <img className="page-arrow-img" src={rightBtnImageUrl} />
      </button>
    );
  } else {
    const classNames = `page-button ${className}`;
    return <button className={classNames}>{children}</button>;
  }
}
export default PageButton;
