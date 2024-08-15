import { useState, useMemo } from "react";
import axios from "@/lib/axios";

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

function AddComment() {
  const [inputValue, setInputValue] = useState("");

  const handleValueChange = (value: string) => {
    setInputValue(value);
  };

  const isFormComplete = useMemo(() => {
    return inputValue !== "";
  }, [inputValue]);

  async function postArticle() {
    const accessToken = "";

    try {
      await axios.post(`/articles`, inputValue, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    } catch (error) {
      console.error("게시글 등록 중 오류가 발생했습니다: ", error);
    } finally {
    }
  }

  return (
    <form>
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
        onClick={postArticle}
      />
    </form>
  );
}

export default AddComment;
