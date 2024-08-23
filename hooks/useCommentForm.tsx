import { postArticleComment } from "@/apis/comment";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";

export default function useCommentForm() {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const onClickAddComment = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!isValid) {
      return;
    }
    if (typeof id !== "string") {
      return;
    }
    await postArticleComment({
      articleId: parseInt(id),
      data: value,
    });
    setValue("");
  };
  console.log(value);

  const onChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    if (value) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [value]);

  return { value, onChangeTextArea, isValid, onClickAddComment };
}
