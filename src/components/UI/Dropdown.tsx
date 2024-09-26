import React, { useState } from "react";
import { ReactComponent as ArrowDownIcon } from "../../assets/ic_arrow_down.svg";
import "../../pages/Market/components/AllItems.css";
import "../../style/global.css";

interface DropdownProps {
  options: { label: string; value: string }[];
  selectedValue: string;
  onSelect: (selectedOption: { label: string; value: string }) => void;
}

const Dropdown = ({ options, selectedValue, onSelect }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // 옵션 선택 시 실행되는 함수
  const handleSelect = (option: { label: string; value: string }) => {
    onSelect(option);
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
            <li key={option.value} onClick={() => handleSelect(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
