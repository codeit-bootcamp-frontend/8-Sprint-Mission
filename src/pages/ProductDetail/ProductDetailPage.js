import React, { useEffect, useState, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import likeIcon from "../../images/heart_inactive.png";
import backIcon from "../../images/icon_back.png";
import CommentList from "./CommentList";
import { getProductById } from "../../api";
import Nav from "../../components/Nav";
import StyledCommonButton from "../../components/Button";

const StyledPageContainer = styled.main`
  margin: 20px 100px;
`;
const StyledProductSection = styled.section`
  display: grid;
  grid-template-areas: "image detail";
  gap: 24px;
`;
const StyledProductImg = styled.img`
  width: 486px;
  height: 486px;
  border-radius: 16px;
  grid-area: image;
`;
const StyledDetailContainer = styled.div`
  grid-area: detail;
`;
const StyledName = styled.p`
  font-size: 24px;
  font-weight: 600;
`;

const StyledPrice = styled.p`
  font-size: 40px;
  font-weight: 600;
`;

const StyledDescriptionTag = styled.p`
  font-size: 16px;
  font-weight: 400;
`;
const StyledLikeIcon = styled.img`
  width: 36px;
  height: 36px;
`;
const StyledLikeContainer = styled.div`
  width: 87px;
  height: 40px;
  padding: 4px 12px;
  border-radius: 35px;
  border: 1px solid var(--gray-200);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
`;
const StyledLikeCount = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: var(--gray-500);
  flex-grow: 2;
  text-align: center;
`;
const StyledCommentSection = styled.section`
  border-top: 1px solid var(--gray-200);
`;
const StyledBackButton = styled(StyledCommonButton)`
  width: 240px;
  height: 48px;
  padding: 0 10px;
  border-radius: 40px;
`;
const StyledBackIcon = styled.img`
  width: 24px;
  height: 24px;
`;

function ProductdetailPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  const fetchProduct = useCallback(async () => {
    try {
      const productData = await getProductById(productId);
      setProduct(productData);
    } catch (error) {
      setError(error.message);
    }
  }, [productId]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Nav />
      <StyledPageContainer>
        <StyledProductSection>
          <StyledProductImg src={product.images[0]} alt="상품 이미지" />
          <StyledDetailContainer>
            <StyledName>{product.name}</StyledName>
            <StyledPrice>{product.price}</StyledPrice>
            <h2>상품 소개</h2>
            <StyledDescriptionTag>{product.description}</StyledDescriptionTag>
            <h2>상품 태그</h2>
            <StyledDescriptionTag>{product.tags}</StyledDescriptionTag>
            <StyledLikeContainer>
              <StyledLikeIcon
                src={likeIcon}
                alt="회색 좋아요 아이콘"
              ></StyledLikeIcon>
              <StyledLikeCount>{product.favoriteCount}</StyledLikeCount>
            </StyledLikeContainer>
          </StyledDetailContainer>
        </StyledProductSection>
        <StyledCommentSection>
          <label htmlFor="ask-input">문의하기</label>
          <textarea
            id="ask-input"
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          />
          <CommentList />
        </StyledCommentSection>
        <Link to="/market">
          <StyledBackButton>
            목록으로 돌아가기
            <StyledBackIcon src={backIcon} alt="돌아가기 아이콘" />
          </StyledBackButton>
        </Link>
      </StyledPageContainer>
    </div>
  );
}

export default ProductdetailPage;
