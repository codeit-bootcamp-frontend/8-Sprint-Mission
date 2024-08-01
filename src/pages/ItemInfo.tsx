import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../lib/hooks/useFetch";
import { getProductId } from "../core/api";
import { INITIAL_PRODUCTID, defaultImageUrl } from "../constants";
import InquiryInput from "../components/Items/ItemInfo/InquiryInput";
import "./ItemInfo.css";

function ItemInfo() {
  const { productId } = useParams<{ productId: string }>();

  const numericProductId = productId ? parseInt(productId, 10) : undefined;

  const { data: productData = INITIAL_PRODUCTID } = useFetch(
    getProductId,
    {
      productId,
    },
    INITIAL_PRODUCTID
  );

  const imageSrc =
    Array.isArray(productData.images) && productData.images.length > 0
      ? productData.images[0]
      : defaultImageUrl;

  return (
    <>
      <section className="item-info-container">
        <img
          className={
            imageSrc === defaultImageUrl
              ? "item-default-img item-info-img"
              : "item-info-img"
          }
          src={imageSrc}
          alt={productData.name}
        />
        <div className="item-info">
          <div className="item-info-title">
            <h1>{productData.name}</h1>
            <h2>{productData.price}원</h2>
          </div>
          <div className="line" />
          <div className="item-info-content">
            <h3>상품 소개</h3>
            <p>{productData.description}</p>
          </div>
          <div className="item-info-content">
            <h3>상품 태그</h3>
            <ul className="tags">
              {(productData.tags || []).map((tag, index) => (
                <li key={index} className="tag-info">
                  #{tag}
                </li>
              ))}
            </ul>
          </div>
          <div className="item-info-favorite">
            <button className="ic-heart" />
            <span className="item-info-favorite-count">
              {productData.favoriteCount || 0}
            </span>
          </div>
        </div>
      </section>
      <InquiryInput productId={numericProductId} />
    </>
  );
}

export default ItemInfo;
