import Image from "next/image";
import React, { useState } from "react";

export interface SearchBarProps {
  onKeywordChange: React.Dispatch<React.SetStateAction<string>>;
}

/**
 * 검색 Form 공통 컴포넌트, 검색창에 입력된 값을 Enter 혹은 돋보기 버튼 클릭시 onKeywordChange 함수를 keyword를 파라미터로 실행
 * @param onKeywordChange setKeyword를 받아오는 prop
 */
export default function SearchBar({ onKeywordChange }: SearchBarProps) {
  const [currentSearchValue, setCurrentSearchValue] = useState("");

  // 검색창에 입력시 마다 value값을 받아서 setState를 해주는 핸들러
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.target.value;
    setCurrentSearchValue(currentValue);
  };

  // submit 이벤트 발생 시 onKeywordChange("현재 검색창 값") 실행
  const handleKeywordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onKeywordChange(currentSearchValue);
  };

  return (
    <form
      className="flex w-full items-center gap-[10px] px-[16px] py-[9px] h-[42px] bg-gray-100 rounded-[12px] focus-within:border-[1px] focus-within:border-brand-blue"
      onSubmit={handleKeywordSubmit}
    >
      <button type="submit">
        <Image width={24} height={24} src="/images/ic_search.png" alt="검색 버튼 이미지" />
      </button>
      <input
        className="block w-full text-gray-400 text-[16px] font-normal bg-inherit outline-none placeholder:text-gray-400 valid:text-gray-800"
        placeholder="검색할 상품을 입력해주세요"
        onChange={handleInputChange}
        value={currentSearchValue}
      />
    </form>
  );
}
