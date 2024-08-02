import React, { useEffect } from "react";
import "./ProductsPaginaitonBtns.css";

import pageArrowLeft from "../../../assets/images/arrow_left_dark.png";
import pageArrowRight from "../../../assets/images/arrow_right_dark.png";

interface ProductsPaginationBtnsProps {
  pageBtnNumList: number[];
  setPageBtnNumList: React.Dispatch<React.SetStateAction<number[]>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPageCount: number;
}

const ProductsPaginaitonBtns: React.FC<ProductsPaginationBtnsProps> = ({
  pageBtnNumList,
  setPageBtnNumList,
  currentPage,
  setCurrentPage,
  totalPageCount,
}) => {
  useEffect(() => {
    if (totalPageCount < 6 || currentPage <= 3) {
      setPageBtnNumList(pageBtnNumList);
    } else if (currentPage > totalPageCount - 2) {
      return;
    } else {
      const pageNumList = pageBtnNumList.map((pageNum) => pageNum + 1);
      setPageBtnNumList(pageNumList);
    }
  }, [currentPage, pageBtnNumList, totalPageCount, setPageBtnNumList]);

  const handleArrowBtnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.currentTarget.className.includes("left")) {
      if (currentPage !== 1) setCurrentPage((prev) => prev - 1);
    } else {
      if (currentPage !== totalPageCount)
        setCurrentPage((prev) => prev + 1);
    }
  };

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const pageNum = Number(event.currentTarget.textContent);
    if (!isNaN(pageNum)) {
      setCurrentPage(pageNum);
    }
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
