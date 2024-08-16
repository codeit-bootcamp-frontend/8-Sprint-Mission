import InputText from "@/components/ui/InputText";
import { Button } from "@/styles/ButtonStyle";
import styled from "styled-components";
import InputTextArea from "../../components/ui/InputTextArea";
import InputFileImage from "@/components/ui/InputFileImage";
import { useState } from "react";

const INPUT_CONTENT = {
  id: "title",
  label: "*제목",
  placeholder: "제목을 입력해주세요.",
};

const TEXTAREA_CONTENT = {
  id: "description",
  label: "*내용",
  placeholder: "내용을 입력해주세요",
};

export default function AddBoardPage() {
  const [inputText, setInputText] = useState("");
  const [textareaText, setTextareaText] = useState("");

  return (
    <div className="mx-auto mt-[24px] mb-[130px] max-w-[1200px] px-[20px] w-full">
      <div className="flex justify-between items-center">
        <h2 className="text-[20px] font-bold mb-[32px]">게시글 쓰기</h2>
        <StyledButton>등록</StyledButton>
      </div>
      <InputText content={INPUT_CONTENT} setInputText={setInputText} />
      <InputTextArea
        content={TEXTAREA_CONTENT}
        setTextareaText={setTextareaText}
      />
      <InputFileImage />
    </div>
  );
}

const StyledButton = styled(Button)`
  width: 74px;
  height: 42px;
  background-color: var(--gray400-color);
`;
