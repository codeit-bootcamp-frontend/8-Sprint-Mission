import React, { useState } from "react";

function DropDownList({ selectedCategory, setSelectedCategory }) {
  const [view, setView] = useState(false);
  const categories = ["최신순", "인기순"];

  const selectCategory = (category) => {
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
