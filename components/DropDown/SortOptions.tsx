import { MouseEvent } from 'react';
import styles from './SortOptions.module.css';

interface SortOptionProps {
  isOpen: boolean;
  sortText: string;
  sortHandler: (e: MouseEvent) => void;
  showOptions: () => void;
}

export default function SortOptions({
  isOpen,
  sortText,
  sortHandler,
  showOptions,
}: SortOptionProps) {
  return (
    <div className={styles.sortContainer}>
      <div className={styles.sortList} onClick={showOptions}>
        <p>{sortText}</p>
        <i className={styles.sortArrowIcon} />
      </div>
      {isOpen && (
        <div className={styles.sortOptions}>
          <ul>
            <li>
              <button data-type="recent" onClick={sortHandler}>
                최신순
              </button>
            </li>
            <li>
              <button data-type="like" onClick={sortHandler}>
                좋아요순
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
