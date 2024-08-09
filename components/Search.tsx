import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Article } from "@/types/article";
import axios from "@/lib/axios";

import styles from "./Search.module.css";
import Image from "next/image";
import searchIcon from "@/assets/images/ic_search.png";

interface SearchProps {
  setArticles: Dispatch<SetStateAction<Article[]>>;
}

function Search({ setArticles }: SearchProps) {
  const [searchValue, setSearchValue] = useState<string>("");
  const router = useRouter();
  const { keyword } = router.query;

  async function getArticles(keyword: string) {
    const response = await axios.get(`/articles/?keyword=${keyword}`);
    setArticles(response.data.list ?? []);
  }

  useEffect(() => {
    if (typeof keyword === "string" && keyword.trim() !== "")
      getArticles(keyword);
  }, [keyword]);

  const handleSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleEnterKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      getArticles(searchValue);
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

export default Search;
