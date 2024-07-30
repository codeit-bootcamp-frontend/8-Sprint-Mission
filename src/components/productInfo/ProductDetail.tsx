import Image from 'components/@shared/Image';
import useProductDetailQuery from 'queries/useProductDetailQuery';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import ProductSpecs from './ProductSpecs';
import { MOBILE_MAX_WIDTH, TABLET_MAX_WIDTH } from ' constants/information/mediaQuerySize';

function ProductDetail() {
  const { id } = useParams();
  const { data: detail } = useProductDetailQuery(id);

  if (!detail) {
    return <div>에러가 발생하였습니다.</div>;
  }

  const { name, description, favoriteCount, images, tags, price } = detail;

  return (
    <StyledProductDetailSection>
      <StyledProductImageWrapper>
        <Image
          key={images[0]}
          src={images[0]}
          alt={'상품 이미지'}
          height={'100%'}
          width={'auto'}
          radius={'1.6rem'}
          aspectRatio={'1'}
        />
      </StyledProductImageWrapper>
      <ProductSpecs name={name} price={price} description={description} tags={tags} favoriteCount={favoriteCount} />
    </StyledProductDetailSection>
  );
}
export default ProductDetail;

const StyledProductDetailSection = styled.section`
  display: flex;
  gap: 2.4rem;

  @media (max-width: ${MOBILE_MAX_WIDTH}px) {
    flex-direction: column;
  }
`;

const StyledProductImageWrapper = styled.div`
  height: 48.6rem;
  @media (max-width: ${TABLET_MAX_WIDTH}px) {
    height: 34rem;
  }
  @media (max-width: ${MOBILE_MAX_WIDTH}px) {
    margin: 0 auto;
    flex-direction: column;
  }
`;
