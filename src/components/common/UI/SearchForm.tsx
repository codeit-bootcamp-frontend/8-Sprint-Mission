import React from "react";
import searchIcon from "assets/images/ic_search.png";

function SearchForm() {
  return (
    <div className="relative">
      <img
        src={searchIcon}
        alt="돋보기 아이콘"
        className="absolute top-3 left-6 w-4 h-4 cursor-pointer"
      />
      <input
        className="flex text-gray-400 bg-gray-100 outline-none rounded-xl py-[9px] pr-5 pl-14 w-[325px]"
        placeholder="검색할 상품을 입력해주세요"
      />
    </div>
  );
}

export default SearchForm;
