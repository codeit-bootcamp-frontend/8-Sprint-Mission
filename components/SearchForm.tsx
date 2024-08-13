import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./SearchForm.module.css";
import Image from "next/image";

interface SearchFormProps {
  initialValue?: string;
  onSearch: (value: string) => void;
}

export default function SearchForm({
  initialValue = "",
  onSearch,
}: SearchFormProps) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(value);
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <input
        className={styles.searchInput}
        name="q"
        value={value}
        placeholder="검색할 상품을 입력해주세요"
        onChange={handleChange}
      />
      <Image
        className={styles.searchImage}
        src="/ic_search.png"
        alt="검색 이미지"
        width={24}
        height={24}
      />
    </form>
  );
}
