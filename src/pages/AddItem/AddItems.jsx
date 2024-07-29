import { useState } from "react";
import FileInput from "../../components/UI/FileInput.jsx";
import "./AddItems.css";
import "../../style/global.css";
import TagInput from "../../components/UI/TagInput.jsx";

function AddItems() {
  const [values, setValues] = useState({
    imgFile: null,
    title: "",
    description: "",
    price: "",
    tags: [],
  });

  const addTag = (tag) => {
    if (!values.tags.includes(tag)) {
      setValues((prevState) => ({
        ...prevState,
        tags: [...prevState.tags, tag],
      }));
    }
  };

  // Function to remove a tag
  const removeTag = (tagToRemove) => {
    setValues((prevState) => ({
      ...prevState,
      tags: prevState.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleFormValuesChange = (name, value) => {
    setValues((preValues) => ({
      ...preValues,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleFormValuesChange(name, value);
  };

  const isSubmitDisabled =
    !values.title || !values.description || !values.price || !values.tags;

  return (
    <>
      <div className="registration-wrapper">
        <div className="registration-title">상품 등록하기</div>
        <button
          type="submit"
          className={`registration-button ${!isSubmitDisabled ? "active" : ""}`}
          disabled={isSubmitDisabled}
        >
          등록
        </button>
      </div>
      <div className="img-form">
        <label htmlFor="input-img" className="input-img">
          상품 이미지
        </label>
        <FileInput
          name="imgFile"
          value={values.imgFile}
          onChange={handleFormValuesChange}
        />
      </div>
      <form className="item-form">
        <label htmlFor="input-title" className="input-label">
          상품명
        </label>
        <input
          className="input-title"
          name="title"
          value={values.title}
          onChange={handleInputChange}
          placeholder="상품명을 입력해주세요"
        />
        <label htmlFor="input-description" className="input-label">
          상품 소개
        </label>
        <textarea
          className="input-description"
          name="description"
          value={values.description}
          onChange={handleInputChange}
          placeholder="상품 소개를 입력해주세요"
        />
        <label htmlFor="input-price" className="input-label">
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
        <TagInput
          tags={values.tags}
          onAddTag={addTag}
          onRemoveTag={removeTag}
        />
      </form>
    </>
  );
}

export default AddItems;
