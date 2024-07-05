import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchProductDataWithId } from "../components/api";

import "./ProductDetailPage.css";
import goBackIcon from "../assets/images/ic_back.png";

import ProductDetailContent from "../components/ProductDetail/ProductDetailContent";
import CommentList from "../components/ProductDetail/CommentList";

function ProductDetailPage() {
  const [productDetails, setProductDetails] = useState([]);

  const { productId } = useParams();

  useEffect(() => {
    async function getProductDetail() {
      const data = await fetchProductDataWithId(productId);
      setProductDetails(data);
    }

    getProductDetail();
  }, []);

  return (
    <div className="product-detail">
      <ProductDetailContent product={productDetails} />
      {/* <CommentList /> */}
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
