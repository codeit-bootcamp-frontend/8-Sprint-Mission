import styled from 'styled-components';
import Product from './Product';
import useProductsQuery from 'queries/useProductsQuery';
import { useState } from 'react';

function BestProductList() {
  const { data } = useProductsQuery({ order: 'favorite', size: '4' });
  const [bestProductList, setProductList] = useState(data.list);

  return (
    <StyledBestProductsSection>
      {bestProductList.map(({ id, name, price, images, favoriteCount }) => (
        <Product key={id} name={name} images={images} price={price} favoriteCount={favoriteCount} />
      ))}
    </StyledBestProductsSection>
  );
}

export default BestProductList;

const StyledBestProductsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.4rem;

  // 너비는 grid-template-columns이 자동으로 맞춰주지만,
  // 이미지 높이는 베스트 상품 목록과 판매중인 상품 목록이 서로 다르기 때문.
  & .product-image-wrapper {
    height: 28.2rem;
    width: 28.2rem;
  }
`;
