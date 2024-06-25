import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import glasses from "../../assets/images/ic_glasses.svg";

import OrderByButton from "./OrderByButton";
function SellingItemsSearch({ orderByHandle, orderBy, onChangeKeyWord }) {
  const [searchValue, setSearchValue] = useState("");
  const onChange = (e) => {
    setSearchValue(e.target.value);
  };
  useEffect(() => {
    onChangeKeyWord(searchValue);
  }, [searchValue]);
  return (
    <SearchContainer>
      <div className="input-container">
        <img src={glasses} />
        <input
          value={searchValue}
          onChange={onChange}
          placeholder="검색할 상품을 입력해주세요."
        />
      </div>
      <Link to="/additem">
        <button className="item-add">상품 등록하기</button>
      </Link>
      <OrderByButton orderByHandle={orderByHandle} orderBy={orderBy} />
    </SearchContainer>
  );
}

export default SellingItemsSearch;

const SearchContainer = styled.div`
  display: flex;
  gap: 12px;
  height: 42px;
  flex-wrap: wrap;
  .input-container {
    font-weight: 400;
    font-size: 16px;
    width: 325px;
    height: 42px;
    background-color: var(--gray-100);
    border-radius: 12px;
    display: flex;
    padding: 13px 20px;
    gap: 5px;
  }
  .inputContainer::placeholder {
    color: var(--gray-400);
  }
  .item-add {
    cursor: pointer;
    background-color: var(--blue);
    color: #fff;
    padding: 11.5px 23px;
    font-weight: 600;
    font-size: 16px;
    border-radius: 8px;
    flex-shrink: 0;
  }
  .items-order {
    width: 130px;
    height: 42px;
    border-radius: 12px;
    border: 1px solid var(--gray-200);
    padding: 0 17px 0 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .sort-text {
    font-size: 16px;
    font-weight: 400;
  }
  .sort-mobile {
    display: none;
  }
  .sort-menu {
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 0;
    top: 45px;

    button {
      border: 1px solid var(--gray-200);
      border-radius: 12px 12px 0 0;
      width: 130px;
      height: 42px;
      background-color: #fff;
      font-size: 16px;
      font-weight: 400;
    }
    button:last-child {
      border-radius: 0 0 12px 12px;
    }
  }
  @media (max-width: 1199px) {
    .input-container {
      width: 242px;
    }
  }
  @media (max-width: 765px) {
    .input-container {
      position: absolute;
      inset: 50px 74px 0 0;
      width: auto;
    }
    .items-order {
      position: absolute;
      top: 50px;
      right: 0;
      width: auto;
      padding: 9px;
    }
    .sort-text {
      display: none;
    }
    .sort-icon {
      display: none;
    }
    .sort-mobile {
      display: block;
    }

    .sort-menu {
      top: 94px;
    }
  }
`;
