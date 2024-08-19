import Nav from "@/components/Nav";
import styled from "styled-components";
import FileInput from "@/components/FileInput";
import { ChangeEvent, FormEvent, useState } from "react";

const StyledFormContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 100px;
`;
const StyledTopSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const StyledAddItemButton = styled.button`
  height: 42px;
  padding: 12px 20px;
  border-radius: 8px;
  margin: auto 0;
  border: none;
  color: var(--gray-50);
  background-color: var(--blue-100);
  cursor: pointer;
  &:disabled {
    background-color: var(--gray-400);
    cursor: auto;
  }
`;
const StyledLabel = styled.label`
  font-size: 18px;
  font-weight: 700;
`;
const StyledInput = styled.input`
  background-color: var(--gray-100);
  padding: 0px 24px;
  font-size: 16px;
  font-weight: 400;
  width: 100%;
  height: 56px;
  border-radius: 12px;
  border: none;
  &:focus {
    outline: 1px solid var(--blue-100);
  }
  &:active {
    outline: 1px solid var(--blue-100);
  }
`;
const StyledTextArea = styled.textarea`
  background-color: var(--gray-100);
  padding: 16px 24px;
  font-size: 16px;
  font-weight: 400;
  width: 100%;
  height: 282px;
  border-radius: 12px;
  border: none;
  resize: none;
  &:focus {
    outline: 1px solid var(--blue-100);
  }
  &:active {
    outline: 1px solid var(--blue-100);
  }
`;

interface FormValues {
  title: string;
  content: string;
  imgFile: File | null;
}

function AddBoardPage() {
  const [values, setValues] = useState<FormValues>({
    title: "",
    content: "",
    imgFile: null,
  });

  const handleChange = (name: string, value: string | number | File | null) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    handleChange(name as keyof FormValues, value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values);
  };
  const checkAllInputsFilled = () => {
    return values.title !== "" && values.content !== "";
  };
  // const checkAllInputsFilled = () => {
  //  return Object.values(values).every((value) => value !== "");
  // };

  return (
    <>
      <Nav />
      <StyledFormContainer onSubmit={handleSubmit}>
        <StyledTopSection>
          <h1>게시글 쓰기</h1>
          <StyledAddItemButton disabled={!checkAllInputsFilled()}>
            등록
          </StyledAddItemButton>
        </StyledTopSection>

        <StyledLabel htmlFor="title">*제목</StyledLabel>
        <StyledInput
          id="title"
          name="title"
          value={values.title}
          onChange={handleInputChange}
          placeholder="제목을 입력해주세요"
        />
        <StyledLabel htmlFor="item-detail">*내용</StyledLabel>
        <StyledTextArea
          id="content"
          name="content"
          value={values.content}
          onChange={handleInputChange}
          placeholder="내용을 입력해주세요"
        />
        <FileInput
          name="imgFile"
          value={values.imgFile}
          onChange={handleChange}
        />
      </StyledFormContainer>
    </>
  );
}

export default AddBoardPage;
