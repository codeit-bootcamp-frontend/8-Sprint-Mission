import React, { useState } from "react";

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
    <div className="dropdown-orderby">
      <button className="dropdown-btn" onClick={(e) => setView(!view)}>
        {selectedCategory}
        <div className="ic-arrow-down" />
      </button>
      {view && (
        <ul className="dropdown-ul">
          {categories.map((category) => (
            <li
              className="dropdown-li "
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
