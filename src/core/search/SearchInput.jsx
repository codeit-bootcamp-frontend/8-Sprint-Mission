import { useState } from "react";
import SearchIcon from "../assets/icons/search/search-icon.svg";
import "./search-input.css";

const SearchInput = ({ handleSearch }) => {
  const [value, setValue] = useState("");
  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      handleSearch(e);
      setValue("");
    }
  };
  return (
    <div className="search-container">
      <img src={SearchIcon} className="search-img" alt="검색 아이콘" />
      <input
        className="search"
        value={value}
        onChange={handleChangeValue}
        onKeyDown={handleSubmit}
        placeholder="검색할 상품을 입력해주세요"
      />
    </div>
  );
};

export default SearchInput;
