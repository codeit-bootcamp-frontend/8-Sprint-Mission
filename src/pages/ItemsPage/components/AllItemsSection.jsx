/**
 * @todo 페이지네이션 구현 및 Page State로 적용
 * @todo 최신순/좋아요순 리스트 콤포넌트 구현 및 적용
 * @todo 검색 콤포넌트 UI 구현
 */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ItemCard from "./ItemCard";
import { getProducts as getAllItems } from "../../../js/itemApi";

/**
 * 페이지 사이즈에 따라, 불러와야하는 아이템 갯수를 리턴하는 함수
 * @returns {number} 모바일=4, 태블릿=6, PC=10
 */
function getPageSize() {
  const width = window.innerWidth;
  if (width < 768) {
    return 4; // 모바일
  } else if (width < 1200) {
    return 6; // 태블릿
  } else {
    return 10; // PC
  }
}

function AllItemsSection() {
  const [itemList, setItemList] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(getPageSize());

  /**
   * 데이터를 받아와서 itemList states에 넣는 비동기 함수
   * @param {string} orderBy 정렬기준
   * @param {number} 페이지 당 상품 수
   */
  async function fetchData({ page, pageSize, orderBy }) {
    const allItems = await getAllItems({ page, pageSize, orderBy });
    setItemList(allItems.list);
  }

  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
    };

    // 화면 크기 변경 시, pageSize 재계산
    window.addEventListener("resize", handleResize);
    fetchData({ page, pageSize, orderBy: "recent" });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [pageSize]);

  return (
    <section className="itemsPage__allItemsSection allItemsSection">
      <div className="allItemsSection__header">
        <div className="allItemsSection__title">
          <h2 className="allItemsSection__title">판매중인 상품</h2>
        </div>
        <div className="searchBar">[검색창]</div>
        <Link to="/additem" className="button btn-small" type="button">
          상품 등록하기
        </Link>
        <div>[최신순/좋아요순]</div>
      </div>
      <div className="allItemsSection__itemList">
        {itemList?.map((item) => (
          <ItemCard item={item} key={`all-item-${item.id}`} />
        ))}
      </div>
      <div className="paginationBar">{/* 페이지네이션 */}</div>
    </section>
  );
}

export default AllItemsSection;
