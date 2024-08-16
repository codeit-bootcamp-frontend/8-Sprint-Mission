import FileInput from "@/components/FileInput";
import { useState, ChangeEvent, FormEvent } from "react";
import { postArticle } from "@/api/types/articleApi";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

interface valuetype {
  title: string;
  content: string;
  imgFile: File | null;
}

const INITIAL_VALUES = {
  title: "",
  content: "",
  imgFile: null,
};

const addboards = () => {
  const [value, setValue] = useState<valuetype>(INITIAL_VALUES);
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: postArticle,
    onSuccess: () => {
      setValue(INITIAL_VALUES);
      console.log("전송 성공");
      router.push("/Boards");
    },
    onError: (error) => {
      console.error("전송 실패:", error);
      if (axios.isAxiosError(error)) {
        console.error("axios error:", error.response?.data);
      }
    },
  });

  const handleChange = (name: string, value: File | null | string) => {
    setValue((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", value.title);
    formData.append("content", value.content);
    if (value.imgFile) {
      formData.append("imgFile", value.imgFile);
    }

    mutation.mutate(formData);
  };

  const { title, content } = value;
  const isSubmitDisabled = !title || !content;

  return (
    <div>
      <h1>게시글 쓰기</h1>
      <form onSubmit={handleSubmit}>
        {mutation.status === "pending" ? (
          <div>로딩 중...</div>
        ) : (
          <>
            <button type="submit" disabled={isSubmitDisabled}>
              등록
            </button>

            <label htmlFor="title">제목</label>
            <input
              id="title"
              name="title"
              type="text"
              onChange={handleInputChange}
            />

            <label htmlFor="content">내용</label>
            <input
              id="content"
              name="content"
              type="text"
              onChange={handleInputChange}
            />

            <label htmlFor="imgFile">이미지</label>
            <FileInput
              id="imgFile"
              name="imgFile"
              value={value.imgFile}
              onChange={handleChange}
            />
          </>
        )}
      </form>
    </div>
  );
};

export default addboards;
