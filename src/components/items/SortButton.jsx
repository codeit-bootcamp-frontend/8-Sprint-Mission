import React, { useState } from "react";

import sortItems from "../../assets/images/ic_sort.svg";
import sortItemsMobile from "../../assets/images/ic_sortmobile.svg";

function SortButton({ orderByHandle }) {
  const [openSort, setOpenSort] = useState(false);

  const sortHandle = () => {
    setOpenSort(!openSort);
  };

  return (
    <>
      <button className="items-order" onClick={sortHandle}>
        <span className="sort-text">최신순</span>
        <img className="sort-icon" src={sortItems} />
        <img className="sort-mobile" src={sortItemsMobile} />
      </button>
      {openSort && (
        <div className="sort-menu">
          <button
            className="sort-recent"
            onClick={() => {
              orderByHandle("recent");
            }}
          >
            최신순
          </button>
          <button
            className="sort-favorite"
            onClick={() => {
              orderByHandle("favorite");
            }}
          >
            좋아요순
          </button>
        </div>
      )}
    </>
  );
}

export default SortButton;
