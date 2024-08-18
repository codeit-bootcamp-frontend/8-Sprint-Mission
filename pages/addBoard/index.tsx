import React from "react";
import styles from "./addBoard.module.css";
import plusIcon from "@/public/images/icons/ic_plus.svg";
import Image from "next/image";

const AddBoard = () => {
  return (
    <form className={styles.addBoardForm}>
      <div className={styles.addBoardHeader}>
        <h1> 게시글 쓰기</h1>
        <button className={styles.addBoardBtn}>등록</button>
      </div>
      <div className={styles.addBoardInputSection}>
        <label htmlFor="addBoardTitle" className={styles.addBoardLabel}>
          *제목
        </label>
        <input
          type="text"
          id="addBoardTitle"
          name="title"
          className={styles.addBoardInput}
          placeholder="제목을 입력해주세요"
        />
      </div>
      <div className={styles.addBoardInputSection}>
        <label htmlFor="addBoardContent" className={styles.addBoardLabel}>
          *내용
        </label>
        <textarea
          name="contents"
          id="addBoardContent"
          className={styles.addBoardTextarea}
          placeholder="내용을 입력해 주세요"
        ></textarea>
      </div>
      <div className={styles.addBoardInputSection}>
        <span className={styles.addBoardLabel}>상품 이미지</span>
        <div className={styles.fileInputSection}>
          <label className={styles.fileInputLabel} htmlFor="articleImg">
            <Image src={plusIcon} alt="plusIcon" />
            <span>이미지 등록</span>
          </label>
          <input id="articleImg" type="file" />
        </div>
      </div>
    </form>
  );
};

export default AddBoard;
