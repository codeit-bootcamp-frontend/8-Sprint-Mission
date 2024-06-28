import React, { useEffect, useState } from "react";
import "./AddProductPage.css";
import FileInput from "./components/FileInput/FileInput";

function AddProductPage(props) {
  const [products, setProducts] = useState([]);
  const [productValues, setProductValues] = useState({
    name: "",
    introduction: "",
    price: "",
    tag: "",
    imgFile: null,
  });
  const [isDisableBtn, setIsDisableBtn] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleChange = (name, value) => {
    setProductValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    const { name: productName, introduction, price, tag } = productValues;
    if (productName && introduction && price && tag) {
      setIsDisableBtn(false);
    } else {
      setIsDisableBtn(true);
    }
  };

  const handleProductSubmit = (e) => {
    e.preventDefault();
    setProducts((product) => [...product, productValues]);
    setProductValues(() => ({
      name: "",
      introduction: "",
      price: "",
      tag: "",
      imgFile: null,
    }));
    setIsDisableBtn(true);
  };

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <div className="add-product-container">
      <form onSubmit={handleProductSubmit}>
        <div className="add-product-title-section">
          <h1>상품 등록하기</h1>
          <button type="submit" disabled={isDisableBtn}>
            등록
          </button>
        </div>
        <div className="add-product-section">
          <FileInput
            name="imgFile"
            value={productValues.imgFile}
            onChange={handleChange}
          />
        </div>
        <div className="add-product-section">
          <label htmlFor="product-name">상품명</label>
          <input
            id="product-name"
            type="text"
            placeholder="상품을 입력해주세요"
            name="name"
            value={productValues.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="add-product-section">
          <label htmlFor="product-introduction">상품 소개</label>
          <textarea
            id="product-introduction"
            placeholder="상품 소개를 입력해주세요"
            name="introduction"
            value={productValues.introduction}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="add-product-section">
          <label htmlFor="product-price">판매 가격</label>
          <input
            id="product-price"
            type="number"
            placeholder="판매 가격을 입력해주세요"
            name="price"
            value={productValues.price}
            onChange={handleInputChange}
          />
        </div>
        <div className="add-product-section">
          <label htmlFor="product-tag">태그</label>
          <input
            id="product-tag"
            type="text"
            name="tag"
            placeholder="태그를 입력해주세요"
            value={productValues.tag}
            onChange={handleInputChange}
          />
        </div>
      </form>
    </div>
  );
}

export default AddProductPage;
