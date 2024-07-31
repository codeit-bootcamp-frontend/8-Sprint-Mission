import styled from "styled-components";
import FileInput from "./FileInput";
import { useState } from "react";

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
`;
const StyledLabel = styled.label`
  font-size: 18px;
  font-weight: 700;
`;
const StyledInput = styled.input`
  background-color: #f3f4f6;
  padding: 10px;
  font-size: 16px;
  font-weight: 400;
  width: 100%;
  height: 56px;
  border-radius: 12px;
  border: none;
`;
const StyledTextArea = styled.textarea`
  background-color: #f3f4f6;
  padding: 10px;
  font-size: 16px;
  font-weight: 400;
  width: 100%;
  height: 282px;
  border-radius: 12px;
  border: none;
`;

function AddItem() {
  const [values, setValues] = useState({
    name: "",
    detail: "",
    price: "",
    tag: "",
    imgFile: null,
  });

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const checkAllInputsFilled = () => {
    return Object.values(values).every((value) => value !== "");
  };

  return (
    <div>
      <StyledFormContainer onSubmit={handleSubmit}>
        <StyledTopSection>
          <h1>상품 등록하기</h1>
          <StyledAddItemButton disabled={!checkAllInputsFilled(values)}>
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
          name="name"
          value={values.name}
          onChange={handleInputChange}
          placeholder="상품명을 입력해주세요"
        />
        <StyledLabel htmlFor="item-detail">상품 소개</StyledLabel>
        <StyledTextArea
          name="detail"
          value={values.detail}
          onChange={handleInputChange}
          placeholder="상품 소개를 입력해주세요"
        />
        <StyledLabel htmlFor="item-price">판매가격</StyledLabel>
        <StyledInput
          name="price"
          value={values.price}
          onChange={handleInputChange}
          type="number"
          placeholder="판매 가격을 입력해주세요"
        />
        <StyledLabel htmlFor="tag">태그</StyledLabel>
        <StyledInput
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
