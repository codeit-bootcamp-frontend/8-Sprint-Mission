import styles from './Pagination.module.css';

export default function Pagination({ pageNum, currentPage, pageHandler }) {
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
