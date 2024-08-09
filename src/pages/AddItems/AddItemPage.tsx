import styled from "styled-components";
import FileInput from "./FileInput";
import { ChangeEvent, FormEvent, useState } from "react";
import Nav from "../../components/Nav";

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
  padding: 10px;
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
  padding: 10px;
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
  name: string;
  detail: string;
  price: string;
  tag: string;
  imgFile: File | null;
}

function AddItem() {
  const [values, setValues] = useState<FormValues>({
    name: "",
    detail: "",
    price: "",
    tag: "",
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
    return (
      values.name !== "" &&
      values.detail !== "" &&
      values.price !== "" &&
      values.tag !== ""
    );
  };

  // const checkAllInputsFilled = () => {
  //  return Object.values(values).every((value) => value !== "");
  // };

  return (
    <div>
      <Nav />
      <StyledFormContainer onSubmit={handleSubmit}>
        <StyledTopSection>
          <h1>상품 등록하기</h1>
          <StyledAddItemButton disabled={!checkAllInputsFilled()}>
            등록
          </StyledAddItemButton>
        </StyledTopSection>
        <FileInput
          name="imgFile"
          value={values.imgFile}
          onChange={handleChange}
        />
        <StyledLabel htmlFor="item-name">상품명</StyledLabel>
        <StyledInput
          id="item-name"
          name="name"
          value={values.name}
          onChange={handleInputChange}
          placeholder="상품명을 입력해주세요"
        />
        <StyledLabel htmlFor="item-detail">상품 소개</StyledLabel>
        <StyledTextArea
          id="item-detail"
          name="detail"
          value={values.detail}
          onChange={handleInputChange}
          placeholder="상품 소개를 입력해주세요"
        />
        <StyledLabel htmlFor="item-price">판매가격</StyledLabel>
        <StyledInput
          id="item-price"
          name="price"
          value={values.price}
          onChange={handleInputChange}
          type="number"
          placeholder="판매 가격을 입력해주세요"
        />
        <StyledLabel htmlFor="tag">태그</StyledLabel>
        <StyledInput
          id="tag"
          name="tag"
          value={values.tag}
          onChange={handleInputChange}
          placeholder="태그를 입력해주세요"
        />
      </StyledFormContainer>
    </div>
  );
}

export default AddItem;
