import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import styles from "./CommentForm.module.css";
import TextArea from "../../../ui/FormComponents/TextArea";
import LinkButton from "../../../ui/Button/LinkButton";
import { postProductComment } from "../../../utils/http";
import { useParams } from "react-router-dom";

export default function CommnetForm() {
  const [commentValue, setCommentValue] = useState<string>("");
  const { productId } = useParams();

  const uploadComment = useMutation({
    mutationFn: postProductComment,
  });

  const handleSubmitComment = () => {
    const commentData = {
      id: productId,
      data: commentValue,
    };
    uploadComment.mutate(commentData);
  };

  const handleChangeValue = (name: string = "comment", value: string) => {
    setCommentValue(value);
  };

  const isActive: boolean = commentValue.trim() !== "";

  return (
    <>
      <form onSubmit={handleSubmitComment} className={styles.commentForm}>
        <TextArea
          id="comment"
          name="comment"
          variant="comment"
          label="문의하기"
          value={commentValue}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유표시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          changeValue={handleChangeValue}
        />
        <div className={styles.commentBtn}>
          <LinkButton
            isActive={!isActive || uploadComment.isPending}
            type="submit"
            btnName="등록"
          />
        </div>
      </form>
    </>
  );
}
