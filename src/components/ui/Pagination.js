import React from 'react';

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
    (_, i) => startPage + i,
  );
  return (
    <ul className="pagination">
      <li>
        <button
          className="prev page-link"
          disabled={activePageNum === 1}
          onClick={() => onPageChange(activePageNum - 1)}
          title="이전"></button>
      </li>
      {pages.map(page => (
        <li key={page}>
          <button className={`page-link ${activePageNum === page ? 'on' : ''}`} onClick={() => onPageChange(page)}>
            {page}
          </button>
        </li>
      ))}
      <li>
        <button
          className="page-link next"
          disabled={activePageNum === totalPageNum}
          onClick={() => onPageChange(activePageNum + 1)}
          title="다음"></button>
      </li>
    </ul>
  );
}

export default Pagination;
