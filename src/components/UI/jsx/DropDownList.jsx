import React, { useState } from "react";
import dropDownIcon from "../../../assets/icons/ic_arrow_down.svg";
import { useEffect } from "react";
import "@components/UI/scss/DropDownList.scss";

/**
 * 페이지 사이즈에 따라, 다르게 보여야 하는 State를 바꾸는 함수
 * @returns {boolean} 모바일=false, 태블릿/PC=true
 */
function getPageSize() {
  const width = window.innerWidth;
  if (width < 768) {
    return false; // 모바일
  } else if (width < 1200) {
    return true; // 태블릿
  } else {
    return true; // PC
  }
}

/**
 * @param {Array} dropDownList - 드랍 다운 아이템 배열 [name: 정렬명, value: query]
 * @param {String} currentItem - 버튼 초기 표기명
 * @param {Function} onSelection - 선택 시 호출되는 함수
 */
function DropDownList({ dropDownItems, currentItem, onSelection }) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [current, setCurrent] = useState();
  const [pageSize, setPageSize] = useState(getPageSize()); // boolean

  const handleItems = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleListItems = (e) => {
    const selectedItem = e.target.getAttribute("data-value"); // 클릭된 요소의 data-value 속성 가져오기
    const selectedItemName = dropDownItems.find(
      (item) => item.value === selectedItem
    )?.name;
    setCurrent(selectedItemName);
    onSelection(selectedItem);
    setIsDropdownVisible(false); // 아이템 선택 후 드롭다운 닫기
  };

  const currentItemName = dropDownItems.find(
    (item) => item.value === currentItem
  )?.name;

  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
    };

    // 화면 크기 변경 시, pageSize 재계산
    window.addEventListener("resize", handleResize);

    // Cleanup Function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [pageSize]);

  useEffect(() => {
    setCurrent(currentItemName);
  }, []);

  return (
    <div className="dropDownList">
      <div className="dropDownList__triggerButton" onClick={handleItems}>
        {pageSize && current}
      </div>
      {pageSize && (
        <img
          className="dropDownList__dropDownArrow"
          src={dropDownIcon}
          alt="▼"
          onClick={handleItems}
        />
      )}

      <div>
        {isDropdownVisible &&
          dropDownItems?.map((item) => (
            <div
              key={item.value}
              className="dropDownList__item"
              data-value={item.value}
              onClick={handleListItems}
            >
              {item.name}
            </div>
          ))}
      </div>
    </div>
  );
}

export default DropDownList;
