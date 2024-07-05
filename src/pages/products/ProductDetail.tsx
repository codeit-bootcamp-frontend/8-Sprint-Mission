import DetailCard from "components/productDetail/DetailCard";
import { Suspense } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";

const DetailSection = styled.section`
  max-width: 120rem;
  margin: 10rem auto;
`;

const DetailLine = styled.hr`
  border: 0.1rem solid var(--gray-200);
  margin: 3.2rem 0;

  @media (width < 120rem) {
    margin: 3.2rem 2.4rem;
  }
`;

const ProductDetail = () => {
  const { productId } = useParams();

  return (
    <DetailSection>
      <Suspense fallback={<div>로딩중</div>}>
        <DetailCard productId={Number(productId)} />
      </Suspense>
      <DetailLine />
    </DetailSection>
  );
};

export default ProductDetail;
