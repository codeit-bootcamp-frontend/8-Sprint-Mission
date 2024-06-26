import React, { useState } from "react";
import dropDownIcon from "../../../assets/icons/ic_arrow_down.svg";
import { useEffect } from "react";
import "../scss/DropDownList.scss";

/**
 * @todo PC/태블릿/모바일 다른 스타일 구현
 * @todo 클릭 시, 아래에 드랍다운 리스트로 최신순/좋아요순 출력
 * -> 최신순/좋아요순을 배열로 받아옴
 *
 * @param {Array} dropDownList - 드랍 다운 아이템 배열 [name: 정렬명, value: query]
 * @param {String} currentItem - 버튼 초기 표기명
 * @param {Function} onSelection - 선택 시 호출되는 함수
 */
function DropDownList({ dropDownItems, currentItem, onSelection }) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [current, setCurrent] = useState();

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
    setCurrent(currentItemName);
  }, []);

  return (
    <div className="dropDownList">
      <div className="dropDownList__triggerButton" onClick={handleItems}>
        {current}
      </div>
      <img
        className="dropDownList__dropDownArrow"
        src={dropDownIcon}
        alt="▼"
        onClick={handleItems}
      />
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
