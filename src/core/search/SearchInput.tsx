import { useState } from "react";
import SearchIcon from "../assets/icons/search/search-icon.svg";
import "./search-input.css";

interface SearchInputProps {
  handleSearch: (keyword: string) => void;
}

const SearchInput = ({ handleSearch }: SearchInputProps) => {
  const [value, setValue] = useState("");
  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter" && e.nativeEvent.isComposing === false) {
      const eventTarget = e.target as HTMLInputElement;
      handleSearch(eventTarget.value);
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
