import React from "react";
import LikeButton from "./LikeButton";
import ItemTag from "./ItemTag";
import ModifyProfile from "../../../assets/ic_kebab.svg";
import "./ItemProfile.css";

function ItemProfile({ product }) {
  if (!product) {
    return <div>Loading...</div>; // 또는 적절한 로딩 컴포넌트 또는 메시지
  }
  const { images, favoriteCount, name, description, tags, price } = product;

  return (
    <>
      <div className="detail-container">
        <img src={images[0]} alt={name} />
        <section className="detail-text">
          <div className="title">
            <h2 className="name">{name}</h2>
            <img src={ModifyProfile} alt="프로필 수정하기" />
          </div>
          <h3 className="price">{price.toLocaleString()}원</h3>
          <hr />
          <p className="description-title">상품소개</p>
          <p className="description">{description}</p>
          <ItemTag tags={tags} />
          <LikeButton favoriteCount={favoriteCount} />
        </section>
      </div>
      <hr className="line-divider" />
    </>
  );
}

export default ItemProfile;
