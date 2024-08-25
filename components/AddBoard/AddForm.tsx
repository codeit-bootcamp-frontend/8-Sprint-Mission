import styles from "@/components/AddBoard/AddForm.module.css";
import PlusIcon from "assets/images/icons/ic_plus.svg";

export default function AddForm() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.addFormHeader}>
        <span className={styles.articleWrite}>게시글 쓰기</span>
        <button className={styles.enrollment}>등록</button>
      </div>
      <div className={styles.writeForm}>
        <span className={styles.titleFont}>*제목</span>
        <div className={styles.titleInput}> 제목을 입력해주세요</div>
        <span className={styles.titleFont}>*내용</span>
        <div className={styles.contentInput}> 내용을 입력해주세요</div>
        <span className={styles.titleFont}>이미지</span>

        <div className={styles.addImage}>
          <div className={styles.plusZone}>
            <PlusIcon className={styles.plusIcon} />
            이미지 등록
          </div>
        </div>
      </div>
    </div>
  );
}
