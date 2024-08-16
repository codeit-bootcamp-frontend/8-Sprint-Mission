import styles from "./SortOptions.module.css";
import { SortOptionProps, SortOptionType } from "./types/DropDownType";

export default function SortOptions({
  isOpen,
  sortText,
  sortHandler,
  showOptions,
}: SortOptionProps) {
  return (
    <div className={styles.sortContainer}>
      <div className={styles.sortList} onClick={showOptions}>
        <p>{SortOptionType[sortText]}</p>
        <i className={styles.sortArrowIcon} />
      </div>
      {isOpen && (
        <div className={styles.sortOptions}>
          <ul>
            <li>
              <button data-type="recent" onClick={sortHandler}>
                {SortOptionType.recent}
              </button>
            </li>
            <li>
              <button data-type="like" onClick={sortHandler}>
                {SortOptionType.like}
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
