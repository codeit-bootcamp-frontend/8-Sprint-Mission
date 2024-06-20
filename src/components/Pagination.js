import React from "react";

function Pagination({ totalPageNum, activePageNum, onPageChange }) {
  const maxVisiblePages = 5;
  let startPage;

  if (totalPageNum <= maxVisiblePages) {
    startPage = 1;
  } else {
    startPage = Math.max(activePageNum - Math.floor(maxVisiblePages / 2), 1);
    startPage = Math.min(startPage, totalPageNum - maxVisiblePages + 1);
  }

  const pages = Array.from(
    { length: Math.min(maxVisiblePages, totalPageNum - startPage + 1) },
    (_, i) => startPage + i
  );
  return (
    <ul className="pagination">
      <li className="prev">
        <a className="page-link"
          disabled={activePageNum === 1}
          onClick={() => onPageChange(activePageNum - 1)}
          href="#none" title='이전'></a>
      </li> 
      {pages.map((page) => (
        <li>
          <a href="#none"
          key={page}
          className={`page-link ${
            activePageNum === page ? "on" : ""
          }`}
          onClick={() => onPageChange(page)}
          >{page}</a>
        </li> 
      ))}
      <li className="next">
        <a className="page-link" disabled={activePageNum === totalPageNum}
        onClick={() => onPageChange(activePageNum + 1)} href="#none" title='다음'></a>
      </li>
    </ul>
  );
}

export default Pagination;