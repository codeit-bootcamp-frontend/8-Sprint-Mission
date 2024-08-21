import { useRouter } from "next/router";
import { useState, ChangeEvent, FormEvent } from "react";
import SearchIcon from "@/assets/images/icons/ic_search.svg";
import styles from "@/components/Boards/ArticleSection.module.css";

export default function ArticleSection() {
  const router = useRouter();
  const [value, setValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) {
      router.push("/");
      return;
    }
    router.push(`/search?q=${value}`);
  };

  return (
    <>
      <div className={styles.articleSectionHeader}>
        <span className={styles.article}>게시글</span>
        <button className={styles.composition}>글쓰기</button>
      </div>

      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <SearchIcon alt=" " />
        <input
          className={styles.searchInput}
          value={value}
          placeholder="검색할 상품을 입력해주세요"
          onChange={handleChange}
        />
      </form>
    </>
  );
}
