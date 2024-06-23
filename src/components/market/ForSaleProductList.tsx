import styled from 'styled-components';
import Product from './Product';
import useProductsQuery from 'queries/useProductsQuery';
import { useState } from 'react';

function ForSaleProductList() {
  const { data } = useProductsQuery({ size: '10' });
  const [forSaleProductList, setProductList] = useState(data.list);

  return (
    <StyledForSaleProductsSection>
      {forSaleProductList.map(({ id, name, price, images, favoriteCount }) => (
        <Product key={id} name={name} images={images} price={price} favoriteCount={favoriteCount} />
      ))}
    </StyledForSaleProductsSection>
  );
}

export default ForSaleProductList;

const StyledForSaleProductsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(5, auto);
  justify-items: flex-end;
  gap: 2.4rem;

  // 너비는 grid-template-columns이 자동으로 맞춰주지만,
  // 이미지 높이는 베스트 상품 목록과 판매중인 상품 목록이 서로 다르기 때문.
  & .product-image-wrapper {
    height: 22.1rem;
  }
`;
