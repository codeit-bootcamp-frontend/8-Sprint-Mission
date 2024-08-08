import styles from "./Search.module.css";
import Image from "next/image";
import searchIcon from "@/assets/images/ic_search.png";

function Search() {
  return (
    <div className={styles.searchWrapper}>
      <Image
        src={searchIcon}
        alt="검색창 돋보기 아이콘"
        width={24}
        height={24}
      />
      <input
        className={styles.inputText}
        type="text"
        placeholder="검색할 상품을 입력해주세요"
      />
    </div>
  );
}

export default Search;
