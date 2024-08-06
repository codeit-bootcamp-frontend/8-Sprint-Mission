import { FormEvent, useRef } from 'react';
import styles from './SearchForm.module.css';

interface FormProps {
  className: string;
  searchHandler: (value: string) => void;
}

export default function SearchForm({ searchHandler, className }: FormProps) {
  const inputValue = useRef<HTMLInputElement>(null);

  const searchItemHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const enteredInputValue = inputValue.current.value;
    searchHandler(enteredInputValue);
  };
  return (
    <div className={`${styles.searchContainer} ${className}`}>
      <form className={styles.searchForm} onSubmit={searchItemHandler}>
        <div className={styles.inputWrapper}>
          <button />
          <input ref={inputValue} placeholder="검색할 상품을 입력해주세요" />
        </div>
      </form>
    </div>
  );
}
