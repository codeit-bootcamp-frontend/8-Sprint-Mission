import "./AddItemPage.css";
import { useState } from "react";

function AddItem() {
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");
  const [tag, setTag] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDetailChange = (e) => {
    setDetail(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const handleTagChange = (e) => {
    setTag(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, detail, price, tag });
  };

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <h1>상품 등록하기</h1>
        <button>등록</button>
        <label htmlFor="add-img">상품 이미지</label>
        <input
          id="add-img"
          name="img-preview"
          type="image"
          placeholder="이미지 등록"
          alt="상품 미리보기 이미지"
        ></input>
        <label htmlFor="item-name">상품명</label>
        <input
          id="item-name"
          name="item-name"
          onChange={handleNameChange}
          placeholder="상품명을 입력해주세요"
        ></input>
        <label htmlFor="item-detail">상품 소개</label>
        <textarea
          id="item-detail"
          name="item-detail"
          onChange={handleDetailChange}
          placeholder="상품 소개를 입력해주세요"
        ></textarea>
        <label htmlFor="item-price">판매가격</label>
        <input
          id="item-price"
          name="item-price"
          onChange={handlePriceChange}
          type="number"
          placeholder="판매 가격을 입력해주세요"
        ></input>
        <label htmlFor="tag">태그</label>
        <input
          id="tag"
          name="tag"
          onChange={handleTagChange}
          placeholder="태그를 입력해주세요"
        ></input>
      </form>
    </div>
  );
}

export default AddItem;
