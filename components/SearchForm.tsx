import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./SearchForm.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

interface SearchFormProps {
  initialValue?: string;
  onSearch: (value: string) => void;
}

export default function SearchForm({
  initialValue = "",
  onSearch,
}: SearchFormProps) {
  const [value, setValue] = useState(initialValue);
  const router = useRouter();

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(value);

    const newQuery = { ...router.query };

    if (value.trim() === "") {
      delete newQuery.keyword;
    }

    newQuery.keyword = value;

    router.push(
      {
        pathname: router.pathname,
        query: newQuery,
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSearchSubmit}>
      <input
        className={styles.searchInput}
        name="q"
        value={value}
        placeholder="검색할 상품을 입력해주세요"
        onChange={handleSearchChange}
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
