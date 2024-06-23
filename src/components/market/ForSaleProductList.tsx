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
  column-gap: 2.4rem;
  row-gap: 4rem;

  & .product-image-wrapper {
    height: 22.1rem;
    width: 22.1rem;
  }
`;
