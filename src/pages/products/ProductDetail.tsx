import DetailCard from "components/productDetail/DetailCard";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";

export interface ProductDetail {
  id: number;
  name: string;
  description: string;
  ownerId: number;
  images: string[];
  tags: string[];
  isFavorite: boolean;
  favoriteCount: number;
}

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
      <DetailCard productId={Number(productId)} />
      <DetailLine />
    </DetailSection>
  );
};

export default ProductDetail;
