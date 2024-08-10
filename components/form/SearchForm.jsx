import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./SearchForm.module.scss";

function SearchForm({ onSearch }) {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  function handleChange(e) {
    setKeyword(e.target.value);
  }

  useEffect(() => {
    const currentKeyword = router.query.q || "";
    setKeyword(currentKeyword);
  }, [router.query.q]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!keyword) {
      return router.push("/boards");
    }
    onSearch(keyword);
    router.push(`/boards?q=${keyword}`);
  }

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
