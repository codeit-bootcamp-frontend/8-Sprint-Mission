import React from "react";
import styles from "./index.module.css";

const addBoard = () => {
  return (
    <form className={styles.addBoardForm}>
      <div className={styles.addBoardHeader}>
        <h1> 게시글 쓰기</h1>
        <button className={styles.addBoardBtn}>등록</button>
      </div>
      <div className={styles.addBoardInputSection}>
        <label htmlFor="" className={styles.addBoardLabel}>
          *제목
        </label>
        <input
          type="text"
          name="title"
          className={styles.addBoardInput}
          placeholder="제목을 입력해주세요"
        />
      </div>
      <div className={styles.addBoardInputSection}>
        <label htmlFor="" className={styles.addBoardLabel}>
          *내용
        </label>
        <textarea
          name="contents"
          id=""
          className={styles.addBoardTextarea}
          placeholder="내용을 입력해 주세요"
        ></textarea>
      </div>
      <div className={styles.addBoardInputSection}>
        <label htmlFor="" className={styles.addBoardLabel}></label>
        <div>
          <label htmlFor=""></label>
          <input type="file" />
        </div>
      </div>
    </form>
  );
};

export default addBoard;
