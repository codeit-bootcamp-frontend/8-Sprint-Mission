import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import styles from "./addBoard.module.css";
import plusIcon from "@/public/images/icons/ic_plus.svg";
import Image from "next/image";
import { AddArticle } from "@/types/types";

const AddBoard = () => {
  const [values, setValues] = useState<AddArticle>({
    title: "",
    content: "",
    image: null,
  });
  const [isDisabledSubmit, setIsDisabledSubmit] = useState(true);

  const isDisabledCheck = useCallback(() => {
    const { title, content } = values;
    if (title && content) {
      setIsDisabledSubmit(false);
    } else {
      setIsDisabledSubmit(true);
    }
  }, [values]);

  const updateFormValues = (
    name: keyof AddArticle,
    value: AddArticle[keyof AddArticle]
  ) => {
    setValues((preValues) => ({
      ...preValues,
      [name]: value,
    }));
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    updateFormValues(name as keyof AddArticle, value);
  };

  useEffect(() => {
    isDisabledCheck();
  }, [isDisabledCheck]);
  return (
    <form className={styles.addBoardForm}>
      <div className={styles.addBoardHeader}>
        <h1> 게시글 쓰기</h1>
        <button className={styles.addBoardBtn} disabled={isDisabledSubmit}>
          등록
        </button>
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
          value={values.title}
          onChange={handleChange}
        />
      </div>
      <div className={styles.addBoardInputSection}>
        <label htmlFor="addBoardContent" className={styles.addBoardLabel}>
          *내용
        </label>
        <textarea
          name="content"
          id="addBoardContent"
          className={styles.addBoardTextarea}
          placeholder="내용을 입력해 주세요"
          value={values.content}
          onChange={handleChange}
        />
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
