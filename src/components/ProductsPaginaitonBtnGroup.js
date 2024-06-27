import "../styles/components/ProductsPaginaitonBtns.css";

import pageArrowLeft from "../assets/arrow_left_dark.png";
import pageArrowRight from "../assets/arrow_right_dark.png";

function ProductsPaginaitonBtns({ pageBtnNumList }) {
  return (
    <div className="pagination-btn-group">
      <button className="pagination-left-btn">
        <img className="pagination-arrow-img" src={pageArrowLeft} />
      </button>
      {pageBtnNumList.map(
        (pageBtnNum) =>
          pageBtnNum && (
            <button className="pagination-num-btn" key={pageBtnNum}>
              {pageBtnNum}
            </button>
          )
      )}
      <button className="pagination-right-btn">
        <img className="pagination-arrow-img" src={pageArrowRight} />
      </button>
    </div>
  );
}

export default ProductsPaginaitonBtns;
