import { FormEvent, useState } from "react";

import styles from "@/components/AddBoard/AddForm.module.css";
import PlusIcon from "assets/images/icons/ic_plus.svg";
import { Form } from "react-router-dom";

export default function AddForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const isSubmitDisabled = !title.trim() || !content.trim();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <div className={styles.headerContainer}>
      <div className={styles.addFormHeader}>
        <span className={styles.articleWrite}>게시글 쓰기</span>
        <button className={styles.enrollment}>등록</button>
      </div>
      <Form className={styles.writeForm} onSubmit={handleSubmit}>
        <span className={styles.titleFont}>*제목</span>
        <div
          className={styles.titleInput}
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        >
          제목을 입력해주세요
        </div>
        <span className={styles.titleFont}>*내용</span>
        <div
          className={styles.contentInput}
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          isTextArea
        >
          내용을 입력해주세요
        </div>
        <span className={styles.titleFont}>이미지</span>

        <div className={styles.addImage}>
          <div className={styles.plusZone}>
            <PlusIcon className={styles.plusIcon} />
            이미지 등록
          </div>
        </div>
      </Form>
    </div>
  );
}
