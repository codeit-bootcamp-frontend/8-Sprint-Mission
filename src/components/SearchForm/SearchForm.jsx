import { useRef } from "react";
import styles from "./SearchForm.module.css";

export default function SearchForm({ searchHandler }) {
  const inputValue = useRef();

  const searchItemHandler = (e) => {
    e.preventDefault();
    const enteredInputValue = inputValue.current.value;
    searchHandler(enteredInputValue);
  };
  return (
    <div className={styles.searchContainer}>
      <form className={styles.searchForm} onSubmit={searchItemHandler}>
        <div className={styles.inputWrapper}>
          <button />
          <input ref={inputValue} placeholder="검색할 상품을 입력해주세요" />
        </div>
      </form>
    </div>
  );
}
