import React, { useState, useEffect } from "react";
import ItemContainer from "./ItemContainer";
import { getItems } from "../../../api";

// count items according to pageSize
const countPageItems = () => {
  if (window.innerWidth < 768) {
    return 1;
  } else if (window.innerWidth < 1200) {
    return 2;
  } else {
    return 4;
  }
};

function BestItemsContainer() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // get api data
  const fetchItemData = async ({ page, pageSize, orderBy }) => {
    try {
      const item = await getItems({ page, pageSize, orderBy });
      setItems(item.list);
      console.log("데이터 가져오기 성공:", item);
    } catch (error) {
      console.error("데이터 가져오기 실패:", error);
      setItems([]);
    }
  };

  // get paperSize
  useEffect(() => {
    const measurePageSize = (e) => {
      setPageSize(countPageItems());
    };

    window.addEventListener("resize", measurePageSize);

    fetchItemData({ page, pageSize, orderBy: "favorite" });

    return (e) => {
      window.removeEventListener("resize", measurePageSize);
    };
  }, [page, pageSize]);

  return (
    <section className="best-items-container">
      <h1 className="section-title">베스트 상품</h1>
      <div className="best-items-list">
        {items.map((item) => (
          <ItemContainer key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default BestItemsContainer;
