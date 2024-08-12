import { useEffect, useState } from "react";
import { getProducts } from "../../api.js";
import { Link } from "react-router-dom";
import ProductList from "./ProductList.js";
import styled from "styled-components";
import searchIcon from "../../images/icon_search_grey.png";

//스타일
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
//스타일

const PAGE_SIZES = {
  S: 6,
  M: 8,
  L: 10,
};

const getPageSize = (width: number) => {
  if (width < 600) return PAGE_SIZES.S;
  if (width < 1200) return PAGE_SIZES.M;
  return PAGE_SIZES.L;
};

type Props = {
  createdAt: string;
  favoriteCount: number;
  ownerId: number;
  images: string[];
  tags: string[];
  price: number;
  description: string;
  name: string;
  id: number;
};

function ItemList() {
  const [items, setItems] = useState<Props[]>([]);
  const [orderBy, setOrderBy] = useState("recent");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(PAGE_SIZES.L);
  const [totalCount, setTotalCount] = useState(0);

  const handleNewestClick = () => setOrderBy("recent");
  const handleBestClick = () => setOrderBy("favorite");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setPageSize(getPageSize(width));
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLoad = async (page: number, pageSize: number) => {
    const result = await getProducts({ orderBy, page, pageSize });
    const product = result.list;
    setItems(product);
    setTotalCount(result.totalCount);
  };

  useEffect(() => {
    handleLoad(currentPage, pageSize);
  }, [currentPage, pageSize]);

  const totalPages = Math.ceil(totalCount / pageSize);
  const isLastPage = currentPage >= totalPages;

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

      <ProductList items={items} />
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        이전 페이지
      </button>
      <button
        disabled={isLastPage}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        다음 페이지
      </button>
    </div>
  );
}

export default ItemList;
