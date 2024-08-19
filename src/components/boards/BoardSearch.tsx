import styled from "styled-components";
import SearchImage from "../../../public/images/i-search.png";
import { AllBoardProps } from "../../components/boards/AllBoard";
import { useState } from "react";

type SearchOrderProp = Pick<AllBoardProps, "setArticleQuery">;

export default function BoardSearch({ setArticleQuery }: SearchOrderProp) {
  const [searchInput, setSearchInput] = useState<string>("");

  return (
    <SearchWrap>
      <input
        type="search"
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
        onKeyDown={(e) => {
          e.key === "Enter"
            ? setArticleQuery((prev) => ({ ...prev, keyword: searchInput }))
            : "";
        }}
        placeholder="검색할 상품을 입력해주세요"
      />
    </SearchWrap>
  );
}

const SearchWrap = styled.label`
  display: inline-block;
  width: 100%;
  height: 42px;

  input {
    width: 100%;
    height: 100%;
    padding: 9px 16px 9px 44px;
    font-size: 1.6rem;
    font-weight: 400;
    border: none;
    border-radius: 12px;
    background-color: var(--gray100-color);
    background-image: url(${SearchImage.src});
    background-position: 20px 45%;
    background-repeat: no-repeat;
    color: var(--gray900-color);

    &::placeholder {
      font-size: 1.6rem;
      font-weight: 400;
      color: var(--gray400-color);
    }
  }
`;
