import { getProductDetail } from "../../api/api";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemProfile from "./components/ItemProfile";
import ItemComment from "./components/ItemComment";
import { Product } from "../../type/ProductType";
import BackImg from "../../assets/ic_back.svg";
import "./ItemDetail.css";

function ItemDetail() {
  const [product, setProduct] = useState<Product | null>(null);

  const { productId } = useParams<Record<string, string | undefined>>();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await getProductDetail(Number(productId));
        setProduct(data);
      } catch (error) {
        console.error("상품 데이터를 가져오는 중 오류 발생:", error);
      }
    }
    fetchProduct();
  }, [productId]);

  return (
    <>
      <ItemProfile product={product} />
      <ItemComment productId={Number(productId)} />
      <section className="go-back">
        <div className="title">목록으로 돌아가기</div>
        <img src={BackImg} alt="목록으로 돌아가기 이미지" />
      </section>
    </>
  );
}

export default ItemDetail;
