import { useState, useMemo } from "react";

import "./AddItemForm.css";
import FileInput from "./FileInput";
import TextInput from "./TextInput";

function AddItemForm() {
  const INPUT_CONTENTS = [
    { name: "name", label: "상품명", placeholder: "상품명을 입력해주세요" },
    {
      name: "content",
      label: "상품 소개",
      placeholder: "상품 소개를 입력해주세요",
    },
    {
      name: "price",
      label: "판매 가격",
      placeholder: "판매 가격을 입력해주세요",
    },
    { name: "tag", label: "태그", placeholder: "태그를 입력해주세요" },
  ];

  const [inputValues, setInputValues] = useState({
    imgFile: null as File | null,
    name: "",
    content: "",
    price: "",
    tag: "",
  });

  const handleValueChange = (name: string, value: string | File) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const isFormComplete = useMemo(() => {
    const { imgFile, ...restValues } = inputValues;
    const isAllInputFill = Object.values(restValues).every(
      (inputValue) => inputValue !== ""
    );
    return isAllInputFill;
  }, [inputValues]);

  const buttonClassName = isFormComplete
    ? "add-item-button-active"
    : "add-item-button";

  return (
    <form className="add-item-form">
      <div className="add-item-title-wrapper">
        <div className="add-item-title">상품 등록하기</div>
        <button className={buttonClassName} disabled={!isFormComplete}>
          등록
        </button>
      </div>

      <div className="add-item-input-wrapper">
        <FileInput name="imgFile" onChange={handleValueChange} />
        {INPUT_CONTENTS.map((content, index) => {
          return (
            <TextInput
              key={index}
              name={content.name}
              label={content.label}
              isTextArea={content.label === "상품 소개"}
              placeholder={content.placeholder}
              onChange={handleValueChange}
            />
          );
        })}
      </div>
    </form>
  );
}

export default AddItemForm;
