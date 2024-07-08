import { ProductDetailParams } from "core/Interface/Product";
import useFetchDetail from "lib/hooks/useFetchDetail";
import { styled } from "styled-components";
import DetailCardContent from "./DetailCardContent";
import DetailImage from "./DetailImage";

const DetailCardWrap = styled.div`
  display: flex;
  gap: 2.4rem;
  @media (width < 1200px) {
    margin: 0 2.4rem;
  }
  @media (width < 768px) {
    display: block;
  }
`;

const DetailCard = ({ productId }: ProductDetailParams) => {
  const { productDetail } = useFetchDetail({ productId });
  return (
    <DetailCardWrap>
      <DetailImage name={productDetail.name} imgSrc={productDetail.images[0]} />
      <DetailCardContent product={productDetail} />
    </DetailCardWrap>
  );
};

export default DetailCard;
