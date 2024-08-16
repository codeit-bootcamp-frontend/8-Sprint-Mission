import { Dispatch, SetStateAction, useState } from "react";
import axios from "@/lib/axios";
import { IComment } from "@/types/comment";

import TextInput from "./Inputs/TextInput";
import AddButton from "./Buttons/AddButton";

const INPUT_CONTENT = [
  {
    name: "content",
    label: "댓글달기",
    placeholder: "댓글을 입력해주세요",
    isTextArea: true,
  },
];

interface AddCommentProps {
  id: number;
  setCommentList: Dispatch<SetStateAction<IComment[]>>;
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

    let newComment: IComment;
    try {
      const response = await axios.post(
        `/articles/${id}/comments`,
        inputValue,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      newComment = response.data ?? [];
      console.log("post succeed: ", newComment);
      setCommentList((prevCommentList) => [newComment, ...prevCommentList]);
    } catch (error) {
      console.error("댓글 등록 중 오류가 발생했습니다: ", error);
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
      <AddButton
        buttonText="등록"
        isFormComplete={isFormComplete}
        onClick={postComment}
      />
    </div>
  );
}

export default AddComment;

// const [inputValue, setInputValue] = useState({
//   content: "",
// });
// const [isFormComplete, setIsFormComplete] = useState(false);

// const handleValueChange = (name: string, value: string) => {
//   setInputValue((prevValues) => ({
//     ...prevValues,
//     [name]: value,
//   }));
//   setIsFormComplete(value.trim() !== "");
// };

// async function postComment() {
//   const accessToken =
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsInNjb3BlIjoiYWNjZXNzIiwiaWF0IjoxNzIzNzczNzEzLCJleHAiOjE3MjM3NzU1MTMsImlzcyI6InNwLXBhbmRhLW1hcmtldCJ9.heZocGCQOejK4JPnWgWzJ438vW1sE2RAsj5d6ZHIhbc";

//   let newComment: IComment;
//   try {
//     const data = {
//       ...inputValue,
//     };
//     const response = await axios.post(`/articles/${id}/comments`, data, {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     });
//     newComment = response.data ?? [];
//     setCommentList((prevCommentList) => [newComment, ...prevCommentList]);
//   } catch (error) {
//     console.error("댓글 등록 중 오류가 발생했습니다: ", error);
//   }
// }
