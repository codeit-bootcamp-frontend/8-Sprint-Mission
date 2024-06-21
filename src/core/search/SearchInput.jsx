import SearchIcon from "../assets/icons/search/search-icon.svg";
import "./search-input.css";

const SearchInput = ({ value, setValue }) => {
  return (
    <div className="search-container">
      <img src={SearchIcon} className="search-img" alt="검색 아이콘" />
      <input
        className="search"
        onChange={setValue}
        value={value}
        placeholder="검색할 상품을 입력해주세요"
      />
    </div>
  );
};

export default SearchInput;
