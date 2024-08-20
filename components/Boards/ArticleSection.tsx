// import DropDown from "./DropDown";
import Articles from "@/components/Board/[id]";
import styles from "@/components/Boards/ArticleSection.module.css";
import SearchForm from "./SearchForm";

export default function ArticleSection() {
  return (
    <>
      <div className={styles.articleSectionHeader}>
        <span className={styles.article}>게시글</span>
        <button className={styles.composition}>글쓰기</button>
      </div>
      <SearchForm />

      <Articles />
    </>
  );
}
