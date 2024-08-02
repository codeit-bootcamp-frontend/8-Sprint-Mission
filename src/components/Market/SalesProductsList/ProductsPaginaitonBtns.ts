import "./ProductsPaginaitonBtns.css";

import pageArrowLeft from "../../../assets/images/arrow_left_dark.png";
import pageArrowRight from "../../../assets/images/arrow_right_dark.png";
import { useEffect } from "react";

function ProductsPaginaitonBtns({
  pageBtnNumList,
  setPageBtnNumList,
  currentPage,
  setCurrentPage,
  totalPageCount,
}) {
  useEffect(() => {
    if (totalPageCount < 6 || currentPage <= 3) {
      setPageBtnNumList(pageBtnNumList);
    } else if (currentPage > totalPageCount - 2) {
      return;
    } else {
      let pageNumList = pageBtnNumList;
      pageNumList = pageNumList.map((pageNum) => pageNum + 1);
      setPageBtnNumList(pageNumList);
      console.log(pageBtnNumList);
    }
  }, [currentPage]);

  const handleArrowBtnClick = (event) => {
    if (event.currentTarget.className.includes("left")) {
      if (currentPage !== 1) setCurrentPage((currentPage) => currentPage - 1);
    } else {
      if (currentPage !== totalPageCount)
        setCurrentPage((currentPage) => currentPage + 1);
    }
  };

  const handleButtonClick = (event) => {
    setCurrentPage(Number(event.target.textContent));
  };

  return (
    <div className="pagination-btn-group">
      <button className="pagination-left-btn" onClick={handleArrowBtnClick}>
        <img
          className="pagination-arrow-img"
          src={pageArrowLeft}
          alt="페이지 왼쪽 이동 화살표"
        />
      </button>
      {pageBtnNumList.map(
        (pageBtnNum) =>
          pageBtnNum && (
            <button
              className={`pagination-num-btn ${
                pageBtnNum === currentPage ? "active" : ""
              }`}
              key={pageBtnNum}
              onClick={handleButtonClick}
            >
              {pageBtnNum}
            </button>
          )
      )}
      <button
        data-btn="rightArrow"
        className="pagination-right-btn"
        onClick={handleArrowBtnClick}
      >
        <img
          className="pagination-arrow-img"
          src={pageArrowRight}
          alt="페이지 오른쪽 이동 화살표"
        />
      </button>
    </div>
  );
}

export default ProductsPaginaitonBtns;