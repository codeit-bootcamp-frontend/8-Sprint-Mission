import { useEffect, useState } from "react";
import countPageItems from "lib/utils/countPageItems";

interface PaginationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
  totalCount: number;
  pageSize: number;
}

const Pagination = ({
  currentPage,
  onPageChange,
  totalCount,
  pageSize,
}: PaginationProps) => {
  const [buttonCount, setButtonCount] = useState<number>(
    countPageItems(5, 8, 10)
  );
  const totalPages = Math.ceil(totalCount / pageSize);

  // 화면 크기에 따라 버튼 수 조정
  const handleResize = () => {
    setButtonCount(countPageItems(5, 8, 10));
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  // 페이지 버튼 렌더링 함수
  const renderPageButtons = () => {
    const buttons = [];
    const halfVisibleButtons = Math.floor(buttonCount / 2);

    let startPage = Math.max(1, currentPage - halfVisibleButtons);
    let endPage = Math.min(totalPages, startPage + buttonCount - 1);

    // 버튼이 최대 수를 초과할 경우 시작 페이지 조정
    if (endPage - startPage < buttonCount - 1) {
      startPage = Math.max(1, endPage - buttonCount + 1);
    }

    // 버튼 렌더링
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={`page-${i}`}
          className={`w-10 h-10 rounded-[40px] font-semibold border-2 border-gray-200 
            ${currentPage === i ? "active bg-brand text-white" : ""}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    return buttons;
  };

  // 페이지 수가 변경될 때 현재 페이지 조정
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      onPageChange(1); // 현재 페이지가 총 페이지 수를 초과하면 1로 초기화
    }
  }, [totalCount, currentPage, totalPages, onPageChange]);

  return (
    <section className="flex justify-center gap-3 font-semibold text-base text-gray-500">
      <button
        className="w-10 h-10 rounded-[40px] bg-white font-semibold border-2 border-gray-200"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {"<"}
      </button>
      {renderPageButtons()}
      <button
        className="w-10 h-10 rounded-[40px] bg-white font-semibold border-2 border-gray-200"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {">"}
      </button>
    </section>
  );
};

export default Pagination;
