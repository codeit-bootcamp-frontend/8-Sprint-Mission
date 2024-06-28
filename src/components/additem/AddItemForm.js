import { useState } from "react";

import "./AddItemForm.css";
import FileInput from "./FileInput";

function AddItemForm() {
  const [values, setValues] = useState({
    imgFile: null,
    name: "",
    content: "",
    price: 0,
    tag: [],
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

  return (
    <form className="add-item-form">
      <div className="add-item-title-wrapper">
        <div className="add-item-title">상품 등록하기</div>
        <button className="add-item-button">등록</button>
      </div>

      <div className="add-item-input-wrapper">
        <div className="label">상품 이미지</div>
        <FileInput
          name="imgFile"
          value={values.imgFile}
          onChange={handleChange}
        />
      </div>
    </form>
  );
}

export default AddItemForm;
