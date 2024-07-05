import React, { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { getDetailProduct } from "../../api/api";
import ProductInfo from "./components/ProductInfo";
import InquiryCommentBox from "./components/InquiryCommentBox";
import { TbArrowBack } from "react-icons/tb";

const Container = styled.div`
  max-width: 75rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
const ReturnButton = styled(Link)`
  align-self: center;
  margin: 2rem 0;
  background-color: var(--brand-blue);
  color: white;
  padding: 0.7rem 1rem;
  border-radius: 5rem;
`;
const Loading = styled.div`
  margin: 10rem auto;
  font-size: 10rem;
  text-align: center;
`;

function ProductPage(props) {
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { productId } = useParams();

  const fetchProduct = useCallback(async (id) => {
    if (!id) {
      setError("id값이 없어요.");
      setIsLoading(true);
      return;
    }
    try {
      const productInfo = await getDetailProduct(id);
      if (!productInfo) {
        throw new Error("데이터를 불러오지 못했습니다.");
      }
      setProduct(productInfo);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProduct(productId);
  }, [fetchProduct, productId]);

  if (error) {
    alert("error");
    return;
  }

  if (isLoading) {
    return <Loading>loading중</Loading>;
  }

  return (
    <>
      {!isLoading && (
        <Container>
          <ProductInfo product={product} />
          <InquiryCommentBox productId={productId} />
          <ReturnButton to="/products">
            목록으로 돌아가기 <TbArrowBack />
          </ReturnButton>
        </Container>
      )}
    </>
  );
}

export default ProductPage;
