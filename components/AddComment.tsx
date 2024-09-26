import { Dispatch, SetStateAction, useState } from "react";
import axios from "@/lib/axios";
import { CommentTypes } from "@/types/comment";
import { API_PATH } from "@/lib/path";

import TextInput from "./Inputs/TextInput";
import AddButton from "./Buttons/AddButton";

const INPUT_CONTENT = [
  {
    name: "content",
    label: "댓글달기",
    type: "textarea",
    placeholder: "댓글을 입력해주세요",
  },
];

interface AddCommentProps {
  id: number;
  setCommentList: Dispatch<SetStateAction<CommentTypes[]>>;
}

function AddComment({ id, setCommentList }: AddCommentProps) {
  const [inputValue, setInputValue] = useState({ content: "" });
  const [isFormComplete, setIsFormComplete] = useState(false);

  const handleValueChange = (name: string, value: string) => {
    setInputValue((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    setIsFormComplete(value.trim() !== "");
  };

  async function postComment() {
    const accessToken = "";

    let newComment: CommentTypes;
    try {
      const response = await axios.post(
        API_PATH.articleComments(id),
        inputValue,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      newComment = response.data ?? [];
      setCommentList((prevCommentList) => [newComment, ...prevCommentList]);
    } catch (error) {
      console.error("댓글 등록 중 오류가 발생했습니다: ", error);
    } finally {
      setInputValue({
        content: "",
      });
    }
  }

  return (
    <div>
      {INPUT_CONTENT.map((content, index) => {
        return (
          <TextInput
            key={index}
            content={content}
            onChange={handleValueChange}
          />
        );
      })}
      <div className="text-right">
        <AddButton
          buttonText="등록"
          isFormComplete={isFormComplete}
          onClick={postComment}
        />
      </div>
    </div>
  );
}

export default AddComment;
