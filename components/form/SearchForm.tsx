import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/router";
import styles from "./SearchForm.module.scss";

interface SearchFormProps {
  onSearch: (keyword: string) => void;
}

function SearchForm({ onSearch }: SearchFormProps) {
  const [keyword, setKeyword] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const currentKeyword = (router.query.q as string) || "";
    setKeyword(currentKeyword);
  }, [router.query.q]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!keyword) {
      return router.push("/boards");
    }
    onSearch(keyword);
    router.push(`/boards?q=${keyword}`);
  };

  return (
    <form onSubmit={handleSubmit} className={styles["search-form"]}>
      <input
        type="text"
        className={styles.search}
        placeholder="검색할 상품을 입력해주세요"
        name="q"
        value={keyword}
        onChange={handleChange}
      />
    </form>
  );
}

export default SearchForm;
