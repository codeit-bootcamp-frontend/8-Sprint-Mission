import styled from 'styled-components';
import Product from './Product';

function ProductList() {
  return (
    <StyledProductsSection>
      <Product />
    </StyledProductsSection>
  );
}

export default ProductList;

const StyledProductsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.4rem;
`;
