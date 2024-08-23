import InputText from "@/components/ui/InputText";
import { Button } from "@/styles/ButtonStyle";
import styled from "styled-components";
import InputTextArea from "../../components/ui/InputTextArea";
import InputFileImage from "@/components/ui/InputFileImage";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { postArticles, postLogin } from "@/api/api";

type StyledButtonProps = {
  active?: boolean;
};

const INPUT_CONTENT = {
  id: "title",
  label: "*제목",
  type: "text",
  placeholder: "제목을 입력해주세요.",
};

const TEXTAREA_CONTENT = {
  id: "description",
  label: "*내용",
  placeholder: "내용을 입력해주세요",
};

export default function AddBoardPage() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    postArticles({ image, content, title });

    router.push("/boards");
  };

  useEffect(() => {
    const handleLoad = async () => {
      try {
        const data = await postLogin();
        return data;
      } catch (err) {
        console.error("에러임" + err);
      }
    };

    handleLoad();
  }, []);

  return (
    <div className="mx-auto mt-[24px] mb-[130px] max-w-[1200px] px-[20px] w-full">
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between items-center">
          <h2 className="text-[20px] font-bold mb-[32px]">게시글 쓰기</h2>

          <StyledButton
            type="submit"
            disabled={title === "" || content === "" ? true : false}
          >
            등록
          </StyledButton>
        </div>
        <InputText
          content={INPUT_CONTENT}
          value={title}
          setInputText={setTitle}
        />
        <InputTextArea
          content={TEXTAREA_CONTENT}
          value={content}
          setTextareaText={setContent}
        />
        <InputFileImage setImage={setImage} />
      </form>
    </div>
  );
}

const StyledButton = styled(Button)<StyledButtonProps>`
  width: 74px;
  height: 42px;
  background-color: var(--blue-color);

  &:disabled {
    background-color: var(--gray400-color);
  }
`;
