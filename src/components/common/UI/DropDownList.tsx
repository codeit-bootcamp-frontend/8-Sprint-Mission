import React, { useState } from "react";
import arrowDownIc from "assets/icons/ic_arrow_down.png";
import sortIc from "assets/icons/ic_sort.png";

interface DropDownListProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

function DropDownList({
  selectedCategory,
  setSelectedCategory,
}: DropDownListProps) {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const categories = ["최신순", "인기순"];

  const selectCategory = (category: string) => {
    setSelectedCategory(category);
    setIsOpened(false);
  };

  return (
    <div className="relative max-md:w-[42px] max-md:h-[42px] max-md:pt-2 pt-3 py-3 rounded-xl w-32 border-gray-200 bg-white border-solid border-2">
      <button
        className="flex gap-3 px-5 max-md:px-2 "
        onClick={(e) => setIsOpened(!isOpened)}
      >
        <span className="hidden md:block">{selectedCategory}</span>
        <img
          src={sortIc}
          alt="드롭다운 정렬 아이콘"
          className="block md:hidden  w-6 h-6 cursor-pointer"
        />
        <img
          src={arrowDownIc}
          alt="드롭다운 화살표 아이콘"
          className="right-6 w-6 h-6 cursor-pointer max-md:hidden"
        />
      </button>
      {isOpened && (
        <ul className="absolute rounded-xl bg-white mt-4 text-center w-full  border-gray-200 border-solid border-2">
          {categories.map((category) => (
            <li
              className="p-3 rounded-xl border-gray-200"
              key={category}
              onClick={(e) => selectCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DropDownList;
