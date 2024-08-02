import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./Pagination.module.css";

interface PaginationProps {
  maxPage: number;
  pageHandler: (page: number | string) => void;
}

export default function Pagination({ maxPage, pageHandler }: PaginationProps) {
  const [pageNum, setPageNum] = useState<number[]>([]);
  const [searchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page"));

  const displayPagination = (page: number) => {
    const pageArray: number[] = Array.from({ length: page }, (v, i) => i + 1);
    setPageNum([...pageArray]);
  };

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
          pageNum.map((i) => (
            <li
              className={`${styles.paginationNum} ${
                currentPage == i ? styles.active : ""
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
