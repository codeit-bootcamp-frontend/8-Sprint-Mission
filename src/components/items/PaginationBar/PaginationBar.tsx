// import { ReactComponent as IconArrowLeft } from '../../../assets/images/icons/arrow_left.svg';
// import { ReactComponent as IconArrowRight } from '../../../assets/images/icons/arrow_right.svg';
import './PaginatinoBar.css';

interface PaginatinoBarProps {
  totalPageNum: number;
  activePageNum: number;
  onPageChange: (i: number) => void;
}

function PaginationBar({
  totalPageNum,
  activePageNum,
  onPageChange,
}: PaginatinoBarProps) {
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
    <>
      <div className="pagination-bar">
        <button
          className="btn-pagination"
          disabled={activePageNum === 1}
          onClick={() => onPageChange(activePageNum - 1)}
        >
          {/* <IconArrowLeft /> */}
        </button>
        {/* 반복 */}
        {pages.map((page) => (
          <button
            key={page}
            className={`btn-pagination ${
              activePageNum === page ? 'active' : ''
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
        <button
          className="btn-pagination"
          disabled={activePageNum === totalPageNum}
          onClick={() => onPageChange(activePageNum + 1)}
        >
          {/* <IconArrowRight /> */}
        </button>
      </div>
    </>
  );
}

export default PaginationBar;
