import React from "react";
import "../scss/SearchBar.scss";
import SearchIcon from "../../../assets/icons/ic_search.svg";

function SearchBar() {
  return (
    <div className="searchBar">
      <img src={SearchIcon} alt="Search" />
      <input
        className="searchBar__input"
        placeholder="검색할 상품을 입력해 주세요."
      />
    </div>
  );
}

export default SearchBar;
