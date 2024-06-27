import React, { useState } from "react";
import useAsync from "../../../hooks/useAsync";
import FileInput from "./FileInput";
import "./AddItemForm.css";

const INITIAL_VALUES = {
  imgFile: null,
  title: "",
  introduction: "",
  price: 0,
  tag: "",
};

function AddItemForm({
  className = "",
  initialValues = INITIAL_VALUES,
  initialPreview,
  onSubmit,
  onSubmitSuccess,
}) {
  const [value, setValue] = useState(initialValues);
  const [isSubmitting, submittingError, onSubmitAsync] = useAsync(onSubmit);

  const handleChange = (name, value) => {
    setValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("imgFile", value.imgFile);
    formData.append("title", value.title);
    formData.append("introduction", value.introduction);
    formData.append("price", value.price);
    formData.append("tag", value.tag);

    const result = await onSubmitAsync(formData);
    if (!result) return;

    const { item } = result;
    setValue(INITIAL_VALUES);
    onSubmitSuccess(item);
  };

  return (
    <form className="ItemForm" onSubmit={handleSubmit}>
      <div className="ItemForm-rows">
        <div className="ItemForm-error-button">
          <div className="ItemForm-error">
            {submittingError && <div>{submittingError.message}</div>}
          </div>
          <div className="ItemForm-button">
            <h1>상품 등록하기</h1>
            <button
              className="ItemForm-submit-button"
              disabled={isSubmitting}
              type="submit"
            >
              등록
            </button>
          </div>
        </div>
        <h2>상품 이미지</h2>
        <FileInput
          className="ItemForm-preview"
          name="imgFile"
          value={value.imgFile}
          initialPreview={initialPreview}
          onChange={handleChange}
        />
        <h2>상품명</h2>
        <input
          className="ItemForm-title"
          name="title"
          value={value.title}
          placeholder={"상품명을 입력해주세요"}
          onChange={handleInputChange}
        />
        <h2>상품 소개</h2>
        <textarea
          className="ItemForm-introduction"
          name="introduction"
          value={value.introduction}
          placeholder={"상품 소개를 입력해주세요"}
          onChange={handleInputChange}
        />
        <h2>판매가격</h2>
        <input
          className="ItemForm-price"
          name="price"
          value={value.price}
          placeholder={"판매 가격을 입력해주세요"}
          onChange={handleChange}
        />
        <h2>태그</h2>
        <input
          className="ItemForm-tag"
          name="tag"
          value={value.tag}
          placeholder={"태그를 입력해주세요"}
          onChange={handleChange}
        />
      </div>
    </form>
  );
}

export default AddItemForm;
