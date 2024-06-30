import "./AddItemPage.css";
import FlieInput from "./FileInput";
import { useState } from "react";

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

  const checkAllInputsFilled = (values) => {
    return (
      values.name.length > 0 &&
      values.detail.length > 0 &&
      values.price.length > 0 &&
      values.tag.length > 0
    );
  };

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <h1>상품 등록하기</h1>
        <button disabled={!checkAllInputsFilled(values)}>등록</button>
        <FlieInput
          name="imgFile"
          value={values.imgFile}
          onChange={handleChange}
        />
        <label htmlFor="item-name">상품명</label>
        <input
          id="item-name"
          name="name"
          value={values.name}
          onChange={handleInputChange}
          placeholder="상품명을 입력해주세요"
        ></input>
        <label htmlFor="item-detail">상품 소개</label>
        <textarea
          id="item-detail"
          name="detail"
          value={values.detail}
          onChange={handleInputChange}
          placeholder="상품 소개를 입력해주세요"
        ></textarea>
        <label htmlFor="item-price">판매가격</label>
        <input
          id="item-price"
          name="price"
          value={values.price}
          onChange={handleInputChange}
          type="number"
          placeholder="판매 가격을 입력해주세요"
        ></input>
        <label htmlFor="tag">태그</label>
        <input
          id="tag"
          name="tag"
          value={values.tag}
          onChange={handleInputChange}
          placeholder="태그를 입력해주세요"
        ></input>
      </form>
    </div>
  );
}

export default AddItem;
