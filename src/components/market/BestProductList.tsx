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
`;
