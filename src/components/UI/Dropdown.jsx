import React, { useState } from "react";
import { ReactComponent as ArrowDownIcon } from "../../assets/ic_arrow_down.svg";
import "../../pages/Market/components/AllItems.css";
import "../../style/global.css";

const Dropdown = ({ options, selectedValue, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // 옵션 선택 시 실행되는 함수
  const handleSelect = (value) => {
    onSelect(value);
    setIsOpen(false);
  };

  return (
    <div className="dropdownBox">
      <div className="dropdownToggle" onClick={toggleDropdown}>
        <div className="optionText">
          {options.find((option) => option.value === selectedValue)?.label}
        </div>
        <ArrowDownIcon />
      </div>

      {isOpen && (
        <ul className="dropdownMenu">
          {options.map((option) => (
            <li key={option.value} onClick={() => handleSelect(option.value)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
