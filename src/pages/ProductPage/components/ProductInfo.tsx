import React from "react";
import styled from "styled-components";
import { FaRegHeart } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

const Container = styled.div`
  max-width: 75rem;
  margin: 0 auto;
  width: 100%;
  display: flex;
  gap: 1rem;
  padding: 1rem;
`;
const ProductImg = styled.div`
  width: 40%;

  img {
    width: 100%;
    border-radius: 1rem;
  }
`;
const ProductContentsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const ProductName = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.6rem;
  color: var(--gray-800);
`;
const ProductPrice = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 2.7rem;
  color: var(--gray-800);
  margin: 1rem 0;
`;
const Boundary = styled.div`
  border: 1px solid var(--gray-200);
`;
const ProductContentLabel = styled.h3`
  font-weight: 500;
  font-size: 0.8rem;
  color: var(--gray-600);
  line-height: 1rem;
  margin: 0.8rem 0;
`;
const ProductDescription = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.3rem;
  color: var(--gray-800);
`;
const ProductTagsSection = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 0.5rem;
`;
const ProductTag = styled.span`
  border-radius: 1.6rem;
  background-color: var(--gray-100);
  padding: 0.4rem 1rem;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.3rem;
  color: var(--gray-800);
`;
const Favorite = styled.div`
  display: flex;
  gap: 0.4rem;
  color: var(--gray-500);
  border: 1px solid var(--gray-200);
  border-radius: 2.1rem;
  padding: 0.6rem 1rem;
  font-size: 1rem;
`;
function ProductInfo({ product }) {
  const { images, name, price, description, tags, favoriteCount } = product;

  return (
    <Container>
      <ProductImg>
        <img src={images[0]} alt="productImg" />
      </ProductImg>
      <ProductContentsSection>
        <div>
          <ProductName>{name}</ProductName>
          <ProductPrice>{price.toLocaleString()}원</ProductPrice>
          <Boundary />
          <ProductContentLabel>상품 소개</ProductContentLabel>
          <ProductDescription>{description}</ProductDescription>
          <ProductContentLabel>상품 태그</ProductContentLabel>
          <ProductTagsSection>
            {tags.map((tag) => (
              <ProductTag key={uuidv4()}>#{tag}</ProductTag>
            ))}
          </ProductTagsSection>
        </div>
        <Favorite>
          <FaRegHeart />
          {favoriteCount}
        </Favorite>
      </ProductContentsSection>
    </Container>
  );
}

export default ProductInfo;
