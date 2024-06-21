import styles from './Pagination.module.css';

export default function Pagination({ pageNum, currentPage, pageHandler }) {
  return (
    <div className={styles.pagination}>
      <button
        className={styles.btn_prev}
        onClick={() => pageHandler(currentPage - 1)}
      />
      <ul className={styles.pagination__list}>
        {pageNum &&
          pageNum.map(i => (
            <li
              className={`${styles.pagination__num} ${
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
        className={styles.btn_next}
        onClick={() => pageHandler(currentPage + 1)}
      />
    </div>
  );
}
