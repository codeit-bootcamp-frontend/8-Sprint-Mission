import { getProductDetail } from "../../api/api";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemProfile from "./components/ItemProfile";
import ItemComment from "./components/ItemComment";
import { Product } from "../../type/ProductType";

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
    </>
  );
}

export default ItemDetail;
