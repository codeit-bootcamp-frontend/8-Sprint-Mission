import { useState } from "react";

import "./AddItemForm.css";
import FileInput from "./FileInput";
import TextInput from "./TextInput";

function AddItemForm() {
  const [values, setValues] = useState({
    imgFile: null,
    name: "",
    content: "",
    price: 0,
    tag: [],
  });

  const INPUT_CONTENTS = [
    { label: "상품명", placeholder: "상품명을 입력해주세요" },
    { label: "상품 소개", placeholder: "상품 소개를 입력해주세요" },
    { label: "판매 가격", placeholder: "판매 가격을 입력해주세요" },
    { label: "태그", placeholder: "태그를 입력해주세요" },
  ];

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

  return (
    <form className="add-item-form">
      <div className="add-item-title-wrapper">
        <div className="add-item-title">상품 등록하기</div>
        <button className="add-item-button">등록</button>
      </div>

      <div className="add-item-input-wrapper">
        <FileInput
          name="imgFile"
          value={values.imgFile}
          onChange={handleChange}
        />
        {INPUT_CONTENTS.map((content) => {
          return (
            <TextInput
              label={content.label}
              placeholder={content.placeholder}
            />
          );
        })}
      </div>
    </form>
  );
}

export default AddItemForm;
