import { useState } from "react";
import styles from "./CommentForm.module.css";
import TextArea from "../Input/TextArea";
import LinkButton from "../Button/LinkButton";

export default function CommnetForm() {
  const [commentValue, setCommentValue] = useState("");

  const handleChangeValue = (name = "comment", value) => {
    setCommentValue(value);
  };

  const isActive = commentValue.trim() !== "";

  return (
    <>
      <form className={styles.commentForm}>
        <TextArea
          style={{ height: "104px" }}
          id="comment"
          name="comment"
          variant="comment"
          label="답글달기"
          value={commentValue}
          placeholder="댓글을 입력해주세요."
          changeValue={handleChangeValue}
        />
        <div className={styles.commentBtn}>
          <LinkButton isActive={!isActive} type="submit" btnName="등록" />
        </div>
      </form>
    </>
  );
}
