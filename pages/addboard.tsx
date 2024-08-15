import { useState, useMemo } from "react";
import { useRouter } from "next/router";
import axios from "@/lib/axios";

import AddButton from "@/components/Buttons/AddButton";
import TextInput from "@/components/Inputs/TextInput";
import FileInput from "@/components/Inputs/FileInput";

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
  const router = useRouter();

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
    const accessToken = "";

    const formData = new FormData();
    formData.append("image", formValues.image);
    try {
      const imageResponse = await axios.post("/images/upload", formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "multipart/form-data",
        },
      });
      const imageURL = imageResponse.data.url;

      const data = {
        ...formValues,
        image: imageURL,
      };
      await axios.post(`/articles`, data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    } catch (error) {
      console.error("게시글 등록 중 오류가 발생했습니다: ", error);
    } finally {
      setFormValues({
        image: "",
        title: "",
        content: "",
      });
      router.push("/boards");
    }
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
      <form>
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
      </form>
    </main>
  );
}

export default AddBoard;
