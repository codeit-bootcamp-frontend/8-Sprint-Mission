import styles from "@/components/AddBoard/AddForm.module.css";

export default function AddForm() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.addFormHeader}>
        <span className={styles.articleWrite}>게시글 쓰기</span>
        <button className={styles.enrollment}>등록</button>
      </div>
    </div>
  );
}
