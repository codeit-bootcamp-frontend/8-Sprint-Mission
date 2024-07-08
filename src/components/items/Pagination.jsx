import React from "react";

function Pagination({ currentPage, onPageChange, totalPages }) {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  //reflect totalPage, make pageButtons
  const renderPageButtons = (e) => {
    const buttons = [];
    for (let i = 0; i < totalPages; i++) {
      const pageNumber = i + 1;
      buttons.push(
        <button
          key={`page-${pageNumber}`}
          className={`page-nav-btn page-${pageNumber} ${
            currentPage === pageNumber ? "active" : ""
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
    <div className="page-nav-bar">
      <button
        className="page-nav-btn page-previous"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {"<"}
      </button>
      {renderPageButtons()}
      <button
        className="page-nav-btn page-next"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {">"}
      </button>
    </div>
  );
}

export default Pagination;
