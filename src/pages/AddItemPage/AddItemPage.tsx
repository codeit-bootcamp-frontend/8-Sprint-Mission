import React, { ChangeEvent, FormEvent, useState } from "react";
import "./AddItemPage.css";
import FileInput from "../../Layout/UI/FileInput";

interface valuetype {
  title: string;
  content: string;
  price: number;
  tag: string[];
  imgFile: File | null;
}

function AddItemPage() {
  const [value, setValue] = useState<valuetype>({
    title: "",
    content: "",
    price: 0,
    tag: [],
    imgFile: null,
  });

  const handleChange = (name: string, value: File | null | string) => {
    setValue((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(value);
  };

  const { title, content, price, tag } = value;
  const isSubmitDisabled = !title || !content || !price || !tag.length;

  return (
    <div className="content">
      <form onSubmit={handleSubmit}>
        <div className="submitbar">
          <h2>상품 등록하기</h2>
          <button
            className="sumbitButton"
            type="submit"
            disabled={isSubmitDisabled}
          >
            등록
          </button>
        </div>
        <div className="container">
          <div className="inputFile">
            <label htmlFor="imgFile">이미지 등록하기</label>
            <FileInput
              id="imgFile"
              name="imgFile"
              value={value.imgFile}
              onChange={handleChange}
            />
          </div>
          <div className="inputboxs">
            <label htmlFor="input">상품명</label>
            <input
              className=" inputbox "
              id="title"
              name="title"
              value={value.title}
              onChange={handleInputChange}
              placeholder="상품명을 입력해 주세요"
            />
          </div>
          <div className="inputboxs">
            <label htmlFor="inputName">상품 소개</label>
            <textarea
              className=" inputcontentbox "
              id="content"
              name="content"
              value={value.content}
              onChange={handleInputChange}
              placeholder="상품 소개를 입력해 주세요"
            />
          </div>
          <div className="inputboxs">
            <label htmlFor="inputName">판매가격</label>
            <input
              className=" inputbox "
              id="price"
              name="price"
              type="number"
              value={value.price}
              onChange={handleInputChange}
              placeholder="판매 가격을 입력해주세요"
            />
          </div>
          <div className="inputboxs">
            <label htmlFor="inputName">태그</label>
            <input
              className=" inputbox "
              id="tag"
              name="tag"
              value={value.tag}
              onChange={handleInputChange}
              placeholder="태그를 입력해주세요"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddItemPage;
