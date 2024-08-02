import React, { useState } from "react";
import "./DropdownMenu.css";
import { ReactComponent as SortIcon } from "../../assets/images/icons/ic_sort.svg";

// 종화 : 드롭다운 메뉴에서 선택된 정렬 기준을 처리하는 함수이기에,"recent" 또는 "favorite"와 같은 문자열을 인수로 받아 (sortType: string)으로 지정
function DropdownMenu({
  onSortSelection,
}: {
  onSortSelection: (sortType: string) => void;
}) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="sortButtonWrapper">
      <button className="sortDropdownTriggerButton" onClick={toggleDropdown}>
        <SortIcon />
      </button>

      {isDropdownVisible && (
        <div className="dropdownMenu">
          <div
            className="dropdownItem"
            onClick={() => {
              onSortSelection("recent");
              setIsDropdownVisible(false);
            }}
          >
            최신순
          </div>
          <div
            className="dropdownItem"
            onClick={() => {
              onSortSelection("favorite");
              setIsDropdownVisible(false);
            }}
          >
            인기순
          </div>
        </div>
      )}
    </div>
  );
}
export default DropdownMenu;
