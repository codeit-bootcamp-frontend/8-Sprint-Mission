import "./AddItemPage.css";
import { useState } from "react";

function AddItem() {
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <h1>상품 등록하기</h1>
        <button>등록</button>
        <label for="add-img">상품 이미지</label>
        <input
          id="add-img"
          name="img-preview"
          type="image"
          placeholder="이미지 등록"
        ></input>
        <label for="item-name">상품명</label>
        <input
          id="item-name"
          name="item-name"
          onChange={handleNameChange}
          placeholder="상품명을 입력해주세요"
        ></input>
        <label for="item-detail">상품 소개</label>
        <textarea
          id="item-detail"
          name="item-detail"
          placeholder="상품 소개를 입력해주세요"
        ></textarea>
        <label for="item-price">판매가격</label>
        <input
          id="item-price"
          name="item-price"
          type="number"
          placeholder="판매 가격을 입력해주세요"
        ></input>
        <label for="tag">태그</label>
        <input id="tag" name="tag" placeholder="태그를 입력해주세요"></input>
      </form>
    </div>
  );
}

export default AddItem;
