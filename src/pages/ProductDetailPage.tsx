import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchProductDataById, fetchProductComment } from "../utils/api";

import "./ProductDetailPage.css";
import goBackIcon from "../assets/images/ic_back.png";

import ProductDetailContent from "../components/ProductDetail/ProductDetailContent";
import CommentList from "../components/ProductDetail/CommentList";

interface ProductDetails {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string;
  favoriteCount: number;
  tags?: string[];
}

interface Writer {
  image: string;
  nickname: string;
}

interface ProductComments {
  writer: Writer;
  content: string;
  updatedAt: string;
}

function ProductDetailPage() {
  const [productDetails, setProductDetails] = useState<ProductDetails | null>(
    null
  );
  const [productComments, setProductComments] = useState<ProductComments[]>([]);

  const { productId } = useParams();

  useEffect(() => {
    async function getProductDetail() {
      if (productId) {
        const data = await fetchProductDataById(productId);
        setProductDetails(data);
      }
    }
    getProductDetail();

    async function getProductComment() {
      if (productId) {
        const data = await fetchProductComment(productId);
        setProductComments(data);
      }
    }
    getProductComment();
  }, [productId]);

  return (
    <div className="product-detail">
      {productDetails && <ProductDetailContent product={productDetails} />}
      <CommentList comments={productComments} />
      <Link className="backto-list-button" to="/items">
        목록으로 돌아가기
        <img
          className="backto-list-button-img"
          src={goBackIcon}
          alt="되돌아가기 아이콘"
          width="24px"
          height="24px"
        />
      </Link>
    </div>
  );
}

export default ProductDetailPage;
