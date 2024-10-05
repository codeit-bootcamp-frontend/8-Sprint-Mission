import React from 'react';
import Image from 'next/image';
import IconArrowLeft from '@assets/images/icons/arrow_left.svg';
import IconArrowRight from '@assets/images/icons/arrow_right.svg';

interface PaginationBarProps {
  totalPageNum: number;
  activePageNum: number;
  onPageChange: (page: number) => void;
}

function PaginationBar({
  totalPageNum,
  activePageNum,
  onPageChange,
}: PaginationBarProps) {
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
      <div className="flex items-center justify-center">
        <button
          className="border border-gray-200 rounded-full w-10 h-10 text-gray-500 font-semibold text-base flex items-center justify-center mr-5 last:mr-0 disabled:cursor-default disabled:opacity-50"
          disabled={activePageNum === 1}
          onClick={() => onPageChange(activePageNum - 1)}
        >
          <Image src={IconArrowLeft} alt="왼쪽 화살표" width={16} height={16} />
        </button>
        {pages.map((page) => (
          <button
            key={page}
            className={`border border-gray-200 rounded-full w-10 h-10 text-gray-500 font-semibold text-base flex items-center justify-center mr-5 last:mr-0 ${
              activePageNum === page ? 'bg-blue-500 text-white' : ''
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
        <button
          className="border border-gray-200 rounded-full w-10 h-10 text-gray-500 font-semibold text-base flex items-center justify-center mr-5 last:mr-0 disabled:cursor-default disabled:opacity-50"
          disabled={activePageNum === totalPageNum}
          onClick={() => onPageChange(activePageNum + 1)}
        >
          <Image
            src={IconArrowRight}
            alt="오른쪽 화살표"
            width={16}
            height={16}
          />
        </button>
      </div>
    </>
  );
}

export default PaginationBar;
