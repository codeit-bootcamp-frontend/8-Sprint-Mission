import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./SearchForm.module.scss";

function SearchForm({ initialValue = "" }) {
  const [value, setValue] = useState(initialValue);
  const router = useRouter();

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!value) {
      return router.push("/");
    }
    return router.push(`/search?q=${value}`);
  }
  return (
    <form onSubmit={handleSubmit} className={styles["search-form"]}>
      <input
        type="text"
        className={styles.search}
        placeholder="검색할 상품을 입력해주세요"
        name="q"
        value={value}
        onChange={handleChange}
      />
    </form>
  );
}

export default SearchForm;
