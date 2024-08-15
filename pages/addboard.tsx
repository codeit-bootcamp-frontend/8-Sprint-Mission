import { useState, useMemo } from "react";

import AddButton from "@/components/Buttons/AddButton";
import TextInput from "@/components/Inputs/TextInput";
import FileInput from "@/components/Inputs/FileInput";
import axios from "@/lib/axios";

const INPUT_CONTENTS = [
  {
    name: "title",
    label: "*제목",
    placeholder: "제목을 입력해주세요",
    isTextArea: false,
  },
  {
    name: "content",
    label: "*내용",
    placeholder: "내용을 입력해주세요",
    isTextArea: true,
  },
];

function AddBoard() {
  const [formValues, setFormValues] = useState({
    image: "",
    title: "",
    content: "",
  });

  const handleValueChange = (name: string, value: string | File) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const isFormComplete = useMemo(() => {
    const { image, ...restValues } = formValues;
    const isAllInputFill = Object.values(restValues).every(
      (inputValue) => inputValue !== "",
    );
    return isAllInputFill;
  }, [formValues]);

  async function postArticle() {
    const accessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsInNjb3BlIjoiYWNjZXNzIiwiaWF0IjoxNzIzNzA4NzIwLCJleHAiOjE3MjM3MTA1MjAsImlzcyI6InNwLXBhbmRhLW1hcmtldCJ9.p9rMWoZywSRwY1JDVG0dky-_tTvrI6E471Oz-KWYmig";

    const formData = new FormData();
    formData.append("image", formValues.image);
    const imageResponse = await axios.post("/images/upload", formData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "multipart/form-data",
      },
    });
    const imageURL = imageResponse.data.url;

    console.log("Image POST Succeed! ", imageURL);

    const data = {
      ...formValues,
      image: imageURL,
    };
    const response = await axios.post(`/articles`, data, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    console.log("Article POST Succeed! ", response.data);
    // 성공하면 모든 값 초기화 및 자유게시판으로 돌아가기
  }

  return (
    <main>
      <div className="mb-8 flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-800">게시글 쓰기</h3>
        <AddButton
          buttonText="등록"
          isFormComplete={isFormComplete}
          onClick={postArticle}
        />
      </div>
      <section>
        {INPUT_CONTENTS.map((content, index) => {
          return (
            <TextInput
              key={index}
              content={content}
              onChange={handleValueChange}
            />
          );
        })}
        <FileInput name="image" label="이미지" onChange={handleValueChange} />
      </section>
    </main>
  );
}

export default AddBoard;
