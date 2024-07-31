import React from "react";
import "./ItemTag.css";

function ItemTag({ tags }) {
  return (
    <>
      <p className="detail-tag-title">상품 태그</p>
      <ul id="detail-tags">
        {tags.map((tag, index) => (
          <li key={index}>
            <span className="tag-name">#{tag}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ItemTag;
