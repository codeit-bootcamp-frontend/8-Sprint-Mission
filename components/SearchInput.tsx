import styled from "styled-components";

const StyledInputContainer = styled.div`
  width: 100%;
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
  width: 100%;
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

function SearchInput() {
  return (
    <StyledInputContainer>
      <StyledIcon src="/image/ic_search.png" alt="돋보기 아이콘" />
      <StyledInput placeholder="검색할 상품을 입력하세요"></StyledInput>
    </StyledInputContainer>
  );
}

export default SearchInput;
