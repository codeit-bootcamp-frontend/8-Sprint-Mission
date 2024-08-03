import styled from 'styled-components';
import TagDisplay from './TagDisplay';
import LikeButton from './LikeButton';
import { ReactComponent as SeeMoreIcon } from '@/asset/svg/ic_kebab.svg';
import { Product } from '@/types/product';

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1280px) {
    gap: 24px;
  }
`;

const ItemImage = styled.div`
  width: 100%;
  height: 100%;

  img {
    border-radius: 12px;
    width: 100%;
    height: auto;
  }

  @media (min-width: 768px) {
    width: 40%;
    max-width: 486px;
  }
`;

const ItemDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  align-items: flex-start;
`;

const MainDetails = styled.div`
  width: 100%;
  position: relative;
`;

const SeeMoreButton = styled.button`
  position: absolute;
  right: 0;
`;

const ItemTitle = styled.h1`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 12px;
  }

  @media (min-width: 1280px) {
    font-size: 24px;
    margin-bottom: 16px;
  }
`;

const ItemPrice = styled.h2`
  font-size: 24px;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 32px;
  }

  @media (min-width: 1280px) {
    font-size: 40px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 140%;
`;

const SectionLabel = styled.h3`
  color: var(--gray600);
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
`;

const TagDisplaySection = styled.div`
  margin: 24px 0;
`;

interface ItemProfileSectionProps {
  product: Product;
}

function ItemProfileSection({ product }: ItemProfileSectionProps) {
  return (
    <SectionContainer>
      <ItemImage>
        <img src={product.images[0]} alt={`${product.name} 상품 대표 사진`} />
      </ItemImage>

      <ItemDetailsContainer>
        <MainDetails>
          <SeeMoreButton>
            <SeeMoreIcon />
          </SeeMoreButton>

          <div>
            <ItemTitle>{product.name}</ItemTitle>
            <ItemPrice>{product.price.toLocaleString()}원</ItemPrice>
          </div>

          <div>
            <SectionLabel>상품 소개</SectionLabel>
            <Description>{product.description}</Description>
          </div>

          <TagDisplaySection>
            <SectionLabel>상품 태그</SectionLabel>
            <TagDisplay tags={product.tags} />
          </TagDisplaySection>
        </MainDetails>

        <LikeButton favoriteCount={product.favoriteCount} />
      </ItemDetailsContainer>
    </SectionContainer>
  );
}

export default ItemProfileSection;
