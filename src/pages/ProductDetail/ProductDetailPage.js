import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import likeIcon from "../../images/heart_inactive.png";
import backIcon from "../../images/icon_back.png";
import CommentList from "./CommentList";
import { getProductById } from "../../api";

function ProductdetailPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  const fetchProduct = useCallback(async () => {
    try {
      const productData = await getProductById(productId);
      setProduct(productData);
    } catch (error) {
      setError(error.message);
    }
  }, [productId]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>상품 사진</p>
      <h1>{product.name}</h1>
      <p>{product.price}</p>
      <h2>상품 소개</h2>
      <p>{product.description}</p>
      <h2>상품 태그</h2>
      <div>{product.tags}</div>
      <div>
        <img src={likeIcon} alt="회색 좋아요 아이콘"></img>
        <p>{product.favoriteCount}</p>
      </div>
      <lable for="ask-input">문의하기</lable>
      <input id="ask-input"></input>
      <CommentList />
      <button>
        목록으로 돌아가기
        <img src={backIcon} alt="돌아가기 아이콘" />
      </button>
    </div>
  );
}

export default ProductdetailPage;
