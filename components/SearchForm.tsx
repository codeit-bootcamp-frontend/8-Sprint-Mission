import { useState } from "react";
import { useRouter } from "next/router";

import styles from "./SearchForm.module.css";
import Image from "next/image";
import searchIcon from "@/assets/images/ic_search.png";

function SearchForm() {
  const [searchValue, setSearchValue] = useState<string>("");
  const router = useRouter();

  const handleSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleEnterKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchValue.length !== 0) {
      e.preventDefault();
      return router.push(`/search?keyword=${searchValue}`);
    }
  };

  return (
    <form className={styles.searchWrapper}>
      <Image
        src={searchIcon}
        alt="검색창 돋보기 아이콘"
        width={24}
        height={24}
      />
      <input
        className={styles.searchInput}
        type="text"
        name="keyword"
        value={searchValue}
        placeholder="검색할 상품을 입력해주세요"
        onChange={handleSearchValueChange}
        onKeyDown={handleEnterKeyDown}
      />
    </form>
  );
}

export default SearchForm;
