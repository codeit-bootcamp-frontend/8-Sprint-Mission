import "../../styles/components/Items/ProductsPaginaitonBtns.css";

import pageArrowLeft from "../../assets/arrow_left_dark.png";
import pageArrowRight from "../../assets/arrow_right_dark.png";
import { useEffect } from "react";

function ProductsPaginaitonBtns({
  pageBtnNumList,
  setPageBtnNumList,
  currentPage,
  setCurrentPage,
  totalPageCount,
}) {
  // pageBtnNumList는 state선언 내부에서 가능할듯

  // page가 5페이지가 넘어가면 현재 페이지를 가운데로 옮겨줌
  // 사이트가 초기화 되거나 목록이 바뀌면 1페이지로 넘어가는거 어떻게?
  // -> query가 cursor값으로 되어있으면 편하게 가능할듯
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
