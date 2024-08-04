import React from "react";

// Props 타입 정의
interface PaginationProps {
  totalPageNum: number; // 총 페이지 수
  activePageNum: number; // 현재 활성 페이지
  onPageChange: (page: number) => void; // 페이지 변경 시 호출되는 콜백 함수
}

const Pagination: React.FC<PaginationProps> = ({
  totalPageNum,
  activePageNum,
  onPageChange,
}) => {
  const maxVisiblePages = 5;
  let startPage: number;

  // 시작 페이지 계산
  if (totalPageNum <= maxVisiblePages) {
    startPage = 1;
  } else {
    startPage = Math.max(activePageNum - Math.floor(maxVisiblePages / 2), 1);
    startPage = Math.min(startPage, totalPageNum - maxVisiblePages + 1);
  }

  // 페이지 배열 생성
  const pages = Array.from(
    { length: Math.min(maxVisiblePages, totalPageNum - startPage + 1) },
    (_, i) => startPage + i
  );

  return (
    <ul className="pagination">
      <li>
        <button
          className="prev page-link"
          disabled={activePageNum === 1}
          onClick={() => onPageChange(activePageNum - 1)}
          title="이전"
        />
      </li>
      {pages.map((page) => (
        <li key={page}>
          <button
            className={`page-link ${activePageNum === page ? "on" : ""}`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        </li>
      ))}
      <li>
        <button
          className="next page-link"
          disabled={activePageNum === totalPageNum}
          onClick={() => onPageChange(activePageNum + 1)}
          title="다음"
        />
      </li>
    </ul>
  );
};

export default Pagination;
