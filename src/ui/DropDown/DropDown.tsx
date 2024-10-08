import styles from "./DropDown.module.css";

export default function DropDown({ isOpen, onEditHandler, onDeleteHandler }) {
  return (
    <div className={styles.sortContainer}>
      {isOpen && (
        <div className={styles.sortOptions}>
          <ul>
            <li>
              <button onClick={onEditHandler}>수정하기</button>
            </li>
            <li>
              <button onClick={onDeleteHandler}>삭제하기</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
