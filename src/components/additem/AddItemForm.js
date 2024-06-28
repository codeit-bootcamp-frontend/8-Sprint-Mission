import { useEffect, useState } from "react";

import "./AddItemForm.css";
import FileInput from "./FileInput";
import TextInput from "./TextInput";

function AddItemForm() {
  const INPUT_CONTENTS = [
    { key: 0, label: "상품명", placeholder: "상품명을 입력해주세요" },
    { key: 1, label: "상품 소개", placeholder: "상품 소개를 입력해주세요" },
    { key: 2, label: "판매 가격", placeholder: "판매 가격을 입력해주세요" },
    { key: 3, label: "태그", placeholder: "태그를 입력해주세요" },
  ];

  const [values, setValues] = useState({
    imgFile: null,
    name: "",
    content: "",
    price: 0,
    tag: [],
  });

  const [inputValues, setInputValues] = useState({
    // prettier를 사용 중인데 코드를 저장하면 아래와 같이 '상품명'과 '태그' 키값만 따옴표가 벗겨집니다...!
    // 상품명: "",
    // "상품 소개": "",
    // "판매 가격": "",
    // 태그: "",
  });

  const [isFormComplete, setIsFormComplete] = useState(false);

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

  useEffect(() => {
    const isAllInputFill = Object.values(inputValues).every(
      (inputValue) => inputValue !== ""
    );
    setIsFormComplete(isAllInputFill);
  }, [inputValues]);

  // const buttonClassName = isFormComplete
  //   ? "add-item-button-active"
  //   : "add-item-button";
  return (
    <form className="add-item-form">
      <div className="add-item-title-wrapper">
        <div className="add-item-title">상품 등록하기</div>
        <button className="add-item-button" disabled={!isFormComplete}>
          등록
        </button>
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
              key={content.key}
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
