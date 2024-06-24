import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import searchIcon from "../assets/ic_search@3x.png";
import dropdownIconPC from "../assets/ic_dropdown@3x.png";
import dropdownIconMobile from "../assets/ic_dropdown_mobile@3x.png";
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
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="dropdown">
      <button
        className="filter__button button--pc"
        onClick={() => {
          setDropdown((v) => !v);
        }}
      >
        <span>{filterName[filter]}</span>
        <img src={dropdownIconPC} alt="dropdown" width="16px" height="8px" />
      </button>
      <button
        className="filter__button button--mobile"
        onClick={() => {
          setDropdown((v) => !v);
        }}
      >
        <img
          src={dropdownIconMobile}
          alt="dropdown"
          width="40px"
          height="40px"
        />
      </button>
      <ul className={`items__filter ${dropdown ? "" : "hidden"}`}>
        <li
          className="filter"
          onClick={() => {
            setFilter("recent");
            setDropdown(false);
          }}
        >
          최신순
        </li>
        <li
          className="filter"
          onClick={() => {
            setFilter("favorite");
            setDropdown(false);
          }}
        >
          좋아요순
        </li>
      </ul>
    </div>
  );
};

function ItemTop({ children }) {
  return <div className="items__top">{children}</div>;
}

ItemTop.H1 = H1;
ItemTop.Search = Search;
ItemTop.LinkBtn = LinkBtn;
ItemTop.DropDown = DropDown;
export default ItemTop;
