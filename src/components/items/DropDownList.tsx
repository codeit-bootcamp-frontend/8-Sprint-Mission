import React, { useState } from "react";
import arrowDownIcon from "../../assets/images/ic_arrow_down.png";

interface DropDownListProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

function DropDownList({
  selectedCategory,
  setSelectedCategory,
}: DropDownListProps) {
  const [view, setView] = useState<boolean>(false);
  const categories = ["최신순", "인기순"];

  const selectCategory = (category: string) => {
    setSelectedCategory(category);
    setView(false);
  };

  return (
    <div className="relative pt-3 py-3 rounded-xl w-32 border-gray-200 bg-white border-solid border-2">
      <button className="flex gap-3 px-5" onClick={(e) => setView(!view)}>
        {selectedCategory}
        <img
          src={arrowDownIcon}
          alt="드롭다운 화살표 아이콘"
          className="right-6 w-6 h-6 cursor-pointer"
        />
      </button>
      {view && (
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
