import React from "react";
import { useMemo } from "react";
import { ReactComponent as LeftArrow } from "../assets/btn_left.svg";
import { ReactComponent as RightArrow } from "../assets/btn_right.svg";

const MAX_VISIBLE_PAGE_COUNT = 5;

const PaginationBar = ({ totalPageNum, activePageNum, onPageChange }) => {
  const startPage = useMemo(() => {
    if (totalPageNum <= MAX_VISIBLE_PAGE_COUNT) {
      return 1;
    }
    return (
      Math.floor(activePageNum / MAX_VISIBLE_PAGE_COUNT) *
        MAX_VISIBLE_PAGE_COUNT +
      1
    );
  }, [totalPageNum, activePageNum]);

  const pages = Array.from({ length: 5 }, (_, i) => startPage + i);

  return (
    <div className="paginationBar">
      <button
        className="paginationButton"
        disabled={activePageNum === 1}
        onClick={() => onPageChange(activePageNum - 1)}
      >
        <LeftArrow />
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`paginationButton ${
            activePageNum === page ? "active" : ""
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        className="paginationButton"
        disabled={activePageNum === totalPageNum}
        onClick={() => onPageChange(activePageNum + 1)}
      >
        <RightArrow />
      </button>
    </div>
  );
};

export default PaginationBar;
