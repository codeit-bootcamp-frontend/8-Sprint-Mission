import styled from "styled-components";
import kebabMenuImg from "../../assets/images/ic_kebab.png";
import heartActive from "../../assets/images/ic_heart_active.png";
import heartInActive from "../../assets/images/ic_heart_inactive.png";

const DetailsContainer = styled.div`
  width: 1200px;
  margin: 24px auto 32px;

  display: grid;
  grid-template-columns: 1fr 690px;
  grid-template-rows: auto auto;
  grid-template-areas:
    "img text"
    ". text";
  column-gap: 24px;
  row-gap: 0px;

  @media screen and (max-width: 1199px) {
    width: auto;
    margin: 24px;
    column-gap: 16px;
    grid-template-columns: 1fr 340px;
  }

  @media screen and (max-width: 767px) {
    margin: 16px 16px 24px;
    flex-direction: column;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      "img"
      "text";
    row-gap: 16px;
  }
`;

const ProductImg = styled.div`
  width: 486px;
  aspect-ratio: 1/1;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 16px;
  grid-area: img;

  @media screen and (max-width: 1199px) {
    width: auto;
    aspect-ratio: 1/1;
  }
`;

const DetailsTextContainer = styled.div`
  position: relative;
  grid-area: text;
`;

const DetailsMainContainer = styled.div`
  padding-bottom: 16px;
  border-bottom: 1px solid var(--cool-gray-200);
`;

const ProductName = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 29px;
  color: var(--cool-gray-800);
  margin-bottom: 16px;

  @media screen and (max-width: 1199px) {
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 12px;
  }

  @media screen and (max-width: 767px) {
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 8px;
  }
`;

const ProductPrice = styled.div`
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
  color: var(--cool-gray-800);

  @media screen and (max-width: 1199px) {
    font-size: 32px;
    line-height: 38px;
  }

  @media screen and (max-width: 767px) {
    font-size: 24px;
    line-height: 29px;
  }
`;

const KebabMenuBtn = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 0;
  right: 0;
`;

const DetailsSubContainer = styled.div`
  padding-top: 16px;
  padding-bottom: 64px;

  @media screen and (max-width: 767px) {
    padding-bottom: 56px;
  }
`;

const SubDetailTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  color: var(--cool-gray-600);
  margin-bottom: 8px;
`;

const ProductDescription = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: var(--cool-gray-800);
  margin-bottom: 24px;
`;

const ProductTagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const ProductTag = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: var(--cool-gray-800);
  border-radius: 999px;
  background-color: var(--cool-gray-100);
  padding: 8px 16px;
`;

const LikeCountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  width: 86px;
  height: 40px;
  border: 1px solid var(--cool-gray-200);
  border-radius: 999px;
  padding: 4px 12px;

  position: absolute;
  left: 0;
  bottom: 0;
`;

const HeartImg = styled.img`
  width: 32px;
  height: 32px;

  @media screen and (max-width: 767px) {
    width: 24px;
    height: 24px;
  }
`;

const LikeCount = styled.div`
  color: var(--cool-gray-500);
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  margin: auto;
`;

function ProductDetails({ details }) {
  const { name, description, price, tags, favoriteCount, isFavorite, images } =
    details;

  return (
    <DetailsContainer>
      <ProductImg src={images}></ProductImg>
      <DetailsTextContainer>
        <KebabMenuBtn src={kebabMenuImg} alt="메뉴 더보기" />
        <DetailsMainContainer>
          <ProductName>{name}</ProductName>
          <ProductPrice>{price.toLocaleString("ko-KR")}원</ProductPrice>
        </DetailsMainContainer>
        <DetailsSubContainer>
          <SubDetailTitle>상품 소개</SubDetailTitle>
          <ProductDescription>{description}</ProductDescription>
          <SubDetailTitle>상품 태그</SubDetailTitle>
          <ProductTagsContainer>
            {tags.map((tag) => {
              const hashedTag = "# " + tag;
              return <ProductTag key={tag}>{hashedTag}</ProductTag>;
            })}
          </ProductTagsContainer>
          <LikeCountContainer>
            <HeartImg src={isFavorite ? heartActive : heartInActive}></HeartImg>
            <LikeCount>{favoriteCount}</LikeCount>
          </LikeCountContainer>
        </DetailsSubContainer>
      </DetailsTextContainer>
    </DetailsContainer>
  );
}

export default ProductDetails;
