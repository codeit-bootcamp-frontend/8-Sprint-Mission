import React from "react";
import ItemTags from "./ItemTags";

function ItemDetails({ details, onChange, onTagsChange }) {
  return (
    <section className="item-details">
      <div className="item-detail-container">
        <label className="section-title">상품명</label>
        <input
          className="item-detail-input"
          type="text"
          id="itemName"
          name="itemName"
          placeholder="상품명을 입력해주세요"
          value={details.itemName}
          onChange={onChange}
        />
      </div>

      <div className="item-detail-container">
        <label className="section-title">상품 소개</label>
        <textarea
          className="item-detail-input"
          id="itemDescription"
          name="itemDescription"
          placeholder="상품 소개를 입력해주세요"
          value={details.itemDescription}
          onChange={onChange}
        />
      </div>

      <div className="item-detail-container">
        <label className="section-title">판매가격</label>
        <input
          className="item-detail-input"
          type="number"
          id="itemPrice"
          name="itemPrice"
          placeholder="판매 가격을 입력해주세요"
          value={details.itemPrice}
          onChange={onChange}
        />
      </div>

      <ItemTags tags={details.itemTags} onTagsChange={onTagsChange} />
    </section>
  );
}

export default ItemDetails;
