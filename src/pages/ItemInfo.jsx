import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductId } from "../core/api";
import InquiryInput from "../components/Items/ItemInfo/InquiryInput";
import "./ItemInfo.css";

const INITIAL_PRODUCTID = {
  createdAt: "",
  favoriteCount: 0,
  ownerId: 0,
  images: [],
  tags: [],
  price: 0,
  description: "",
  name: "",
  id: 0,
  isFavorite: false,
};

function ItemInfo() {
  const { productId } = useParams();
  const [productData, setProductData] = useState(INITIAL_PRODUCTID);

  //get productId data
  useEffect(() => {
    const fetchProductId = async () => {
      try {
        const data = await getProductId({ productId });
        setProductData(data);
      } catch (error) {
        console.error("fetchProductId 실패:", error);
      }
    };

    fetchProductId();
  }, [productId]);

  return (
    <>
      <section className="item-info-container">
        <img
          className="item-info-img"
          src={productData.images}
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
              {productData.tags.map((tag, index) => (
                <li key={index} className="tag-item">
                  #{tag}
                </li>
              ))}
            </ul>
          </div>
          <div className="item-info-favorite">
            <button className="ic-heart" />
            <span className="item-info-favorite-count">
              {productData.favoriteCount}
            </span>
          </div>
        </div>
      </section>
      <InquiryInput productId={productId} />
    </>
  );
}

export default ItemInfo;
