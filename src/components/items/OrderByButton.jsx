import React, { useState } from "react";

import sortItems from "../../assets/images/ic_sort.svg";
import sortItemsMobile from "../../assets/images/ic_sortmobile.svg";

function OrderByButton({ orderByHandle, orderBy }) {
  const [openSort, setOpenSort] = useState(false);

  const sortHandle = () => {
    setOpenSort(!openSort);
  };
  const onClickOrder = (order) => {
    orderByHandle(order);
    sortHandle();
  };

  return (
    <>
      <button className="items-order" onClick={sortHandle}>
        <span className="sort-text">
          {orderBy === "recent" ? "최신순" : "좋아요순"}
        </span>
        <img className="sort-icon" src={sortItems} />
        <img className="sort-mobile" src={sortItemsMobile} />
      </button>
      {openSort && (
        <div className="sort-menu">
          <button
            className="sort-recent"
            onClick={() => {
              onClickOrder("recent");
            }}
          >
            최신순
          </button>
          <button
            className="sort-favorite"
            onClick={() => {
              onClickOrder("favorite");
            }}
          >
            좋아요순
          </button>
        </div>
      )}
    </>
  );
}

export default OrderByButton;
