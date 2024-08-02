import React from "react";

interface PaginationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
  totalPages: number;
}

const Pagination = ({
  currentPage,
  onPageChange,
  totalPages,
}: PaginationProps) => {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  //reflect totalPage, make pageButtons
  const renderPageButtons = () => {
    const buttons = [];
    for (let i = 0; i < totalPages; i++) {
      const pageNumber = i + 1;
      buttons.push(
        <button
          key={`page-${pageNumber}`}
          className={`w-10 h-10 rounded-[40px] font-semibold border-2 border-gray-200 
            page-${pageNumber} ${
            currentPage === pageNumber ? "active bg-brand text-white" : ""
          }`}
          onClick={() => handlePageChange(pageNumber)}
        >
          {pageNumber}
        </button>
      );
    }
    return buttons;
  };

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
