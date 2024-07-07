import React, { useEffect, useState, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import likeIcon from "../../images/heart_inactive.png";
import backIcon from "../../images/icon_back.png";
import CommentList from "./CommentList";
import { getProductById } from "../../api";
import "./ProductDetail.css";

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
      <div className="detailpage">
        <section className="product-section">
          <img
            className="product-img"
            src={product.images[0]}
            alt="상품 이미지"
          />
          <div className="detail-container">
            <h1 className="product-name">{product.name}</h1>
            <p className="product-price">{product.price}</p>
            <h2>상품 소개</h2>
            <p className="product-description">{product.description}</p>
            <h2>상품 태그</h2>
            <div className="product-tags">{product.tags}</div>
            <div className="like-container">
              <img
                className="like-icon"
                src={likeIcon}
                alt="회색 좋아요 아이콘"
              ></img>
              <p className="product-favoriteCount">{product.favoriteCount}</p>
            </div>
          </div>
        </section>
        <section className="comment-section">
          <lable className="ask-label" htmlFor="ask-input">
            문의하기
          </lable>
          <textarea
            id="ask-input"
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          />
          <CommentList />
        </section>
        <Link to="/market">
          <button className="button-back">
            목록으로 돌아가기
            <img
              className="button-back-icon"
              src={backIcon}
              alt="돌아가기 아이콘"
            />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProductdetailPage;
