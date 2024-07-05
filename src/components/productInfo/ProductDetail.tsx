import Image from 'components/@shared/Image';
import useProductDetailQuery from 'queries/useProductDetailQuery';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import likeIcon from 'assets/images/market/like-icon.png';
import Spacer from 'components/@shared/Spacer';

function ProductDetail() {
  const { id } = useParams();
  const { data: detail } = useProductDetailQuery(id);

  if (!detail) {
    return <div>에러가 발생하였습니다.</div>;
  }

  const { name, description, favoriteCount, images, tags, price } = detail;

  return (
    <StyledProductDetailSection>
      <Image
        key={images[0]}
        src={images[0]}
        alt={'상품 이미지'}
        height={'100%'}
        width={'auto'}
        radius={'1.6rem'}
        aspectRatio={'1'}
      />
      <div className={`product-text-detail`}>
        <StyledProductSpecs>
          <h2>{name}</h2>
          <h1>{price.toLocaleString()}원</h1>
          <Spacer topHeight={'1.6rem'} bottomHeight={'1.6rem'} needLine={true} />
          <small>상품 소개</small>
          <p>{description}</p>
          <small>상품 태그</small>
          <StyledTagsWrapper>
            {tags.map(tag => (
              <div className={'product-specs-tag'} key={tag}>{`#${tag}`}</div>
            ))}
          </StyledTagsWrapper>
        </StyledProductSpecs>
        <StyledLikeCount>{favoriteCount}</StyledLikeCount>
      </div>
    </StyledProductDetailSection>
  );
}
export default ProductDetail;

const StyledProductDetailSection = styled.section`
  display: flex;

  gap: 2.4rem;
  height: 100%;
  width: 100%;

  height: 48.6rem;
  padding-top: 2.4rem;

  & .product-text-detail {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const StyledProductSpecs = styled.article`
  // 상품 이름
  & h2 {
    font-size: 2.4rem;
    font-weight: 600;
    line-height: 2.864rem;
    color: var(--cool-gray-800);
    margin-bottom: 1.6rem;
  }

  // 가격
  & h1 {
    font-size: 4rem;
    font-weight: 600;
    line-height: 4.773rem;
    color: var(--cool-gray-800);
  }

  // 서브 타이틀
  & small {
    display: inline-block;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.671rem;
    color: var(--cool-gray-600);
    margin-bottom: 0.8rem;
  }

  // 상품 설명
  & p {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.24rem;
    margin-bottom: 2.3rem;
  }
`;

const StyledTagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  & .product-specs-tag {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 3.6rem;
    padding: 0.6em 1.6rem;
    border-radius: 2.6rem;
    background-color: var(--cool-gray-100);

    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.4rem;
  }
`;

const StyledLikeCount = styled.article`
  display: flex;
  align-items: center;

  background-image: url(${likeIcon});
  background-repeat: no-repeat;
  background-size: 3.2rem;
  background-position: 1.4rem;

  width: fit-content;
  min-width: 5rem;
  height: 4rem;

  padding: 0.4rem 1.2rem 0.4rem 5rem;
  border-radius: 3.5rem;
  border: 1px solid var(--cool-gray-200);

  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.909rem;
  color: var(--cool-gray-500);
`;
