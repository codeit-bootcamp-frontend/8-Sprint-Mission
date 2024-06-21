import React, { useEffect, useState } from "react";
import API from '../ItemAPI';
import Allcard from './AllCard';
import DropdownList from '../Layout/UI/SearchBar';
import { ReactComponent as SortIcon } from "../images/icons/ic_sort.svg";
import { ReactComponent as SearchIcon } from "../images/icons/ic_search.svg";
import PaginationBar from '../Layout/UI/Carousel';


function Card() {


  //드랍 바 기능
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  // 드롭다운 메뉴 제어

  const handleSortSelection = (sortOption) => {
    setOrderBy(sortOption);
    setIsDropdownVisible(false);
  }; // 정렬 옵션 선택시 옵션설정, 드롭다운 숨김

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };// 드롭다운 클릭시 호출됨

  
  //


  return (
    <div>
        {/* 중간 SearchBar */}

        <div className="allItemsSectionHeader">
        <h1 className="sectionTitle">판매 중인 상품</h1>
          상품 등록하기
      </div>

    <div>
        {/* 드랍 바 기능 */}
       <div className="sortButtonWrapper">
          <button
            className="sortDropdownTriggerButton"
            onClick={toggleDropdown}
          >
            <SortIcon />
          </button>
          {isDropdownVisible && (
            <DropdownList onSortSelection={handleSortSelection} />
          )}
        </div>


      {/* search 기능 */}
       <div className="searchBarWrapper">
          <SearchIcon />
          <input
            className="searchBarInput"
            placeholder="검색할 상품을 입력해 주세요"
          />
        </div>
    </div>



      {/* 카드 이미지 정렬 해 놓은것들*/}
      <div className="card-container"> 
      {
        API.list.map((item) => {
          return(
            <Allcard 
              images={item.images}
              name={item.name}
              price={item.price}
              favoriteCount={item.favoriteCount}
            />
          )
        })
      }
      </div>




    {/* 캐러셀 버튼들 */}
    <div className="paginationBarWrapper">
        <PaginationBar/>
      </div>


    </div>
  );
}

export default Card;