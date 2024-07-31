import { Link } from "react-router-dom";
import likeIcon from "../../images/heart_inactive.png";
import "./ProductListItem.css";
import styled from "styled-components";

const StyledListItemContainer = styled.div`
  word-break: keep-all;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  text-align: left;
  color: black;
  text-decoration: none;
  margin-bottom: 20px;

  &:visited {
    color: #000000;
  }

  &:active {
    color: #000000;
  }
`;

const StyledListItemImg = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 16px;
  border-color: gray;
`;

const StyledItemName = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin: 16px 0 0;
`;
const StyledItemPrice = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin: 6px 0;
`;
const StyledLikeArea = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
`;

const StyledLikeIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const StyledLikeCount = styled.p`
  font-size: 12px;
  font-weight: 500;
  margin: 0 4px;
`;

function ProductListItem({ item }) {
  return (
    <Link to={`/market/${item.id}`}>
      <StyledListItemContainer>
        <StyledListItemImg src={item.images[0]} alt={item.name} />
        <StyledItemName>{item.name}</StyledItemName>
        <StyledItemPrice>{item.price}원</StyledItemPrice>
        <StyledLikeArea>
          <StyledLikeIcon src={likeIcon} alt="좋아요 아이콘" />
          <StyledLikeCount>{item.favoriteCount}</StyledLikeCount>
        </StyledLikeArea>
      </StyledListItemContainer>
    </Link>
  );
}

export default ProductListItem;
