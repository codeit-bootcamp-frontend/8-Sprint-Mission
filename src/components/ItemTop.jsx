import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import searchIcon from "../assets/ic_search@3x.png";
import isDropdownIconPC from "../assets/ic_dropdown@3x.png";
import isDropdownIconMobile from "../assets/ic_dropdown_mobile@3x.png";
import "../styles/items.css";

const H1 = ({ children }) => {
  return <h1 className="h1__items">{children}</h1>;
};

const Search = () => {
  return (
    <form className="search">
      <button className="search__button">
        <img src={searchIcon} alt="search" width="15px" height="15px" />
      </button>
      <input
        className="search__input"
        placeholder="검색할 상품을 입력해주세요"
      />
    </form>
  );
};

const LinkBtn = ({ children, to }) => {
  return (
    <Link to={to}>
      <button className="regist">{children}</button>
    </Link>
  );
};

const DropDown = ({ filterName, filter, setFilter }) => {
  const [isDropdown, setIsDropdown] = useState(false);

  const submitFilter = (name) => {
    setFilter(name);
    setIsDropdown(false);
  };

  return (
    <div className="isDropdown">
      <button
        className="filter__button button--pc"
        onClick={() => {
          setIsDropdown((prev) => !prev);
        }}
      >
        <span>{filterName[filter]}</span>
        <img
          src={isDropdownIconPC}
          alt="isDropdown"
          width="16px"
          height="8px"
        />
      </button>
      <button
        className="filter__button button--mobile"
        onClick={() => {
          setIsDropdown((prev) => !prev);
        }}
      >
        <img
          src={isDropdownIconMobile}
          alt="isDropdown"
          width="40px"
          height="40px"
        />
      </button>
      <ul className={`items__filter ${isDropdown ? "" : "hidden"}`}>
        <li className="filter" onClick={() => submitFilter("recent")}>
          최신순
        </li>
        <li className="filter" onClick={() => submitFilter("favorite")}>
          좋아요순
        </li>
      </ul>
    </div>
  );
};

function ItemTop({ children }) {
  return <div className="items__top">{children}</div>;
}

ItemTop.Title = H1;
ItemTop.Search = Search;
ItemTop.LinkBtn = LinkBtn;
ItemTop.DropDown = DropDown;
export default ItemTop;
