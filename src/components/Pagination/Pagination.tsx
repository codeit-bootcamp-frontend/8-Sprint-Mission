import { useState, useEffect } from "react";
import styles from "./Pagination.module.css";
import { PaginationProps, PageSliceOptions } from "./@types/Pagination";

export default function Pagination({
  currentPage,
  maxPage,
  pageHandler,
}: PaginationProps) {
  const [pageSlice, setPageSlice] = useState<PageSliceOptions>({
    start: 0,
    end: 5,
  });
  const [pageNum, setPageNum] = useState<number[]>([]);

  let slicePageNum = pageNum.slice(pageSlice.start, pageSlice.end);

  const displayPagination = (page: number) => {
    const pageArray: number[] = Array.from({ length: page }, (v, i) => i + 1);
    setPageNum([...pageArray]);
  };

  useEffect(() => {
    if (currentPage > pageSlice.end) {
      setPageSlice((prev) => ({
        start: prev.end,
        end: Math.min((prev.end += 5), maxPage),
      }));
    } else if (currentPage <= pageSlice.start) {
      setPageSlice((prev) => ({
        start: (prev.start -= 5),
        end: prev.start + 5,
      }));
    }
  }, [currentPage, pageSlice.start, pageSlice.end]);

  useEffect(() => {
    displayPagination(maxPage);
  }, [maxPage]);

  return (
    <div className={styles.pagination}>
      <button
        disabled={currentPage === pageNum[0]}
        className={styles.btnPrev}
        onClick={() => pageHandler(currentPage - 1)}
      />
      <ul className={styles.paginationList}>
        {pageNum &&
          slicePageNum.map((i) => (
            <li
              className={`${styles.paginationNum} ${
                currentPage === i ? styles.active : ""
              }`}
              key={`page${i}`}
              onClick={() => pageHandler(i)}
            >
              {i}
            </li>
          ))}
      </ul>
      <button
        disabled={currentPage === pageNum[pageNum.length - 1]}
        className={styles.btnNext}
        onClick={() => pageHandler(currentPage + 1)}
      />
    </div>
  );
}
