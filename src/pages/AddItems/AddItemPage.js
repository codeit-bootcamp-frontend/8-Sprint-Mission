import "./AddItemPage.css";
import FileInput from "./FileInput";
import { useState } from "react";

.form-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 100px;
}

.top-section-submit {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.add-item-button {
  height: 42px;
  padding: 12px 20px;
  border-radius: 8px;
  margin: auto 0;
}

.label {
  font-size: 18px;
  font-weight: 700;
}

#item-name,
#item-price,
#item-detail,
#tag {
  background-color: #f3f4f6;
  padding: 10px;
  font-size: 16px;
  font-weight: 400;
}

#item-name,
#item-price,
#tag {
  width: 100%;
  height: 56px;
  border-radius: 12px;
}

#item-detail {
  width: 100%;
  height: 200px;
  border-radius: 12px;
}


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
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="top-section-submit">
          <h1>상품 등록하기</h1>
          <button
            className="add-item-button"
            disabled={!checkAllInputsFilled(values)}
          >
            등록
          </button>
        </div>
        <FileInput
          name="imgFile"
          value={values.imgFile}
          onChange={handleChange}
        />
        <label className="label" htmlFor="item-name">
          상품명
        </label>
        <input
          id="item-name"
          name="name"
          value={values.name}
          onChange={handleInputChange}
          placeholder="상품명을 입력해주세요"
        ></input>
        <label className="label" htmlFor="item-detail">
          상품 소개
        </label>
        <textarea
          id="item-detail"
          name="detail"
          value={values.detail}
          onChange={handleInputChange}
          placeholder="상품 소개를 입력해주세요"
        ></textarea>
        <label className="label" htmlFor="item-price">
          판매가격
        </label>
        <input
          id="item-price"
          name="price"
          value={values.price}
          onChange={handleInputChange}
          type="number"
          placeholder="판매 가격을 입력해주세요"
        ></input>
        <label className="label" htmlFor="tag">
          태그
        </label>
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
