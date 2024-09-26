import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductTypes } from "@/types/product";
import { CommentTypes } from "@/types/comment";
import {
  fetchProductDataById,
  fetchProductComment,
} from "@/lib/api/product/apis";

import goBackIcon from "@/assets/images/ic_back.png";

import ProductDetailContent from "@/components/ProductDetailContent/ProductDetailContent";
import CommentList from "@/components/CommentList/CommentList";
import { useRouter } from "next/router";

function ProductDetailPage() {
  const [productDetails, setProductDetails] = useState<ProductTypes | null>(
    null,
  );
  const [productComments, setProductComments] = useState<CommentTypes[]>([]);

  const router = useRouter();
  const { productId } = router.query;

  useEffect(() => {
    async function getProductDetail() {
      if (typeof productId === "string") {
        const data = await fetchProductDataById(productId);
        setProductDetails(data);
      }
    }
    getProductDetail();

    async function getProductComment() {
      const LIMIT = 10;
      if (typeof productId === "string") {
        const data = await fetchProductComment(productId, LIMIT);
        setProductComments(data);
      }
    }
    getProductComment();
  }, [productId]);

  return (
    <div className="product-detail">
      {productDetails && <ProductDetailContent product={productDetails} />}
      <CommentList commentList={productComments} />
      <Link className="backto-list-button" href="/items">
        목록으로 돌아가기
        <Image
          className="backto-list-button-img"
          src={goBackIcon}
          alt="되돌아가기 아이콘"
          width={24}
          height={24}
        />
      </Link>
    </div>
  );
}

export default ProductDetailPage;
