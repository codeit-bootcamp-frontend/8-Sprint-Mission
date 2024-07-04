import { useState } from "react";
import FileInput from "./FileInput";
import "./AddItems.css";
import "./global.css";

function ItemForm() {
  const [values, setValues] = useState({
    imgFile: null,
    title: "",
    description: "",
    price: "",
    tag: "",
  });

  const [submit, setSubmit] = useState(false);

  const handleChange = (name, value) => {
    setValues((preValues) => ({
      ...preValues,
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
    setSubmit(true);
  };

  return (
    <>
      <div className="registration-wrapper">
        <div className="registration-title">상품 등록하기</div>
        <button
          type="submit"
          className={`registration-button ${submit ? "active" : ""}`}
          onClick={handleSubmit}
        >
          등록
        </button>
      </div>
      <div className="img-form">
        <label Htmlfor="input-img" className="input-img">
          상품 이미지
        </label>
        <FileInput
          name="imgFile"
          value={values.imgFile}
          onChange={handleChange}
        />
      </div>
      <form className="item-form" onSubmit={handleSubmit}>
        <label Htmlfor="input-title" className="input-label">
          상품명
        </label>
        <input
          className="input-title"
          name="title"
          value={values.title}
          onChange={handleInputChange}
          placeholder="상품명을 입력해주세요"
        />
        <label Htmlfor="input-description" className="input-label">
          상품 소개
        </label>
        <textarea
          className="input-description"
          name="description"
          value={values.description}
          onChange={handleInputChange}
          placeholder="상품 소개를 입력해주세요"
        />
        <label Htmlfor="input-price" className="input-label">
          판매가격
        </label>
        <input
          className="input-price"
          name="price"
          type="number"
          value={values.price}
          onChange={handleInputChange}
          placeholder="판매 가격을 입력해주세요"
        />
        <label Htmlfor="input-tag" className="input-label">
          태그
        </label>
        <input
          className="input-tag"
          name="tag"
          value={values.tag}
          onChange={handleInputChange}
          placeholder="태그를 입력해주세요"
        />
      </form>
    </>
  );
}

export default ItemForm;
