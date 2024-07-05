import { useState, useEffect } from 'react';
import styles from './Pagination.module.css';

export default function Pagination({ maxPage, currentPage, pageHandler }) {
  const [pageNum, setPageNum] = useState([]);

  const displayPagination = page => {
    const pageArray = Array.from({ length: page }, (v, i) => i + 1);
    setPageNum([...pageArray]);
  };

  // useEffect(() => {
  //   const fetchMaxPage = async () => {
  //     const caculateMaxPage = await loadProducts();
  //     console.log(caculateMaxPage);
  //     displayPagination(caculateMaxPage);
  //   };

  //   fetchMaxPage();
  // }, []);

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
          pageNum.map(i => (
            <li
              className={`${styles.paginationNum} ${
                currentPage === i ? styles.active : ''
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
