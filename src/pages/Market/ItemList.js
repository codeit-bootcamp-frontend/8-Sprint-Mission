import { useEffect, useState, useCallback } from "react";
import { getProducts } from "../../api.js";
import { Link } from "react-router-dom";
import ProductList from "./ProductList.js";
import styled from "styled-components";
import searchIcon from "../../images/icon_search_grey.png";

const LIMIT = 10;

const StyledTitleContainer = styled.h1`
  font-size: 20px;
  font-weight: 700;
`;

const StyledMenuBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledButtonBar = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StyledButton = styled.button`
  background-color: #3692ff;
  width: 133px;
  height: 42px;
  padding: 12px 23px;
  border-radius: 8px;
  border: none;
  color: #ffffff;
`;

const StyledInputContainer = styled.div`
  width: 325px;
  height: 42px;
  padding: 9px 20px 9px 16px;
  border-radius: 12px;
  background-color: #f3f4f6;
  border: none;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const StyledInput = styled.input`
  width: 280px;
  height: 40px;
  border: none;
  z-index: 1;
  background-color: transparent;

  &:focus {
    border: none;
    outline: none;
  }

  &:active {
    border: none;
    outline: none;
  }
`;

const StyledIcon = styled.img`
  width: 25px;
  height: 25px;
`;

function ItemList() {
  const [items, setItems] = useState([]);
  const [offset, setOffset] = useState(0);
  const [order, setOrder] = useState("favoriteCount");

  const handleNewestClick = () => setOrder("createdAt");
  const handleBestClick = () => setOrder("favoriteCount");

  /*
  async function handleLoad({ order, limit: LIMIT }) {
    let result = await getProducts({ order, offset, limit: LIMIT });
    const product = result.list;
    setItems(product);
    setOffset(offset + LIMIT);
  }
*/

  const handleLoad = useCallback(
    async ({ order, limit: LIMIT }) => {
      let result = await getProducts({ order, offset, limit: LIMIT });
      const product = result.list;
      setItems(product);
      setOffset((prevOffset) => prevOffset + LIMIT);
    },
    [offset]
  );

  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleLoadMore = () => {
    handleLoad({ order, offset, limit: LIMIT });
  };

  useEffect(() => {
    handleLoad({ order, offset, limit: LIMIT });
  }, [order, handleLoad, offset]);

  return (
    <div>
      <StyledTitleContainer>전체 상품</StyledTitleContainer>

      <StyledMenuBar>
        <StyledInputContainer>
          <StyledIcon src={searchIcon} alt="돋보기 아이콘" />
          <StyledInput placeholder="검색할 상품을 입력하세요"></StyledInput>
        </StyledInputContainer>
        <StyledButtonBar>
          <Link to="/additem">
            <StyledButton>상품 등록하기</StyledButton>
          </Link>
          <button onClick={handleNewestClick}>최신순</button>
          <button onClick={handleBestClick}>좋아요순</button>
        </StyledButtonBar>
      </StyledMenuBar>

      <ProductList items={sortedItems} />
      <button onClick={handleLoadMore}>다음 페이지</button>
    </div>
  );
}

export default ItemList;
