import React, { useEffect, useState } from "react";
import ItemCard from "@pages/ItemsPage/components/ItemCard";
import { getProducts as getBestItems } from "@js/itemApi";

/**
 * 페이지 사이즈에 따라, 불러와야하는 아이템 갯수를 리턴하는 함수
 * @returns {number} 모바일=1, 태블릿=2, PC=4
 */
function getPageSize() {
  const width = window.innerWidth;
  if (width < 768) {
    return 1; // 모바일
  } else if (width < 1200) {
    return 2; // 태블릿
  } else {
    return 4; // PC
  }
}

function BestItemsSection() {
  const [itemList, setItemList] = useState([]);
  const [pageSize, setPageSize] = useState(getPageSize());

  /**
   * 데이터를 받아와서 itemList states에 넣는 비동기 함수
   * @param {string} orderBy 정렬기준
   * @param {number} 페이지 당 상품 수
   */
  const fetchData = async ({ pageSize, orderBy }) => {
    const bestItems = await getBestItems({ pageSize, orderBy });
    setItemList(bestItems.list);
  };

  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
    };

    // 화면 크기 변경 시, pageSize 재계산
    window.addEventListener("resize", handleResize);
    fetchData({ orderBy: "favorite", pageSize });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [pageSize]);

  return (
    <section className="itemsMain__bestItemsSection bestItemsSection">
      <div className="bestItemsSection__header">
        <h2 className="bestItemsSection__title">베스트 상품</h2>
      </div>
      <div className="bestItemsSection__itemList">
        {itemList?.map((item) => (
          <ItemCard item={item} key={`best-item-${item.id}`} />
        ))}
      </div>
    </section>
  );
}

export default BestItemsSection;
