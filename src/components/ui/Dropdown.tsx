import React, { useState } from "react";

// Option 타입 정의
interface Option {
  orderLabel: string; // 고유한 식별자로 사용할 문자열
  label: string; // 드롭다운 항목에 표시될 레이블
}

// Props 타입 정의
interface DropdownProps {
  options: Option[]; // 드롭다운 옵션 배열
  selectedOption: Option; // 현재 선택된 옵션
  onSelect: (option: Option) => void; // 옵션 선택 시 호출되는 콜백 함수
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  selectedOption,
  onSelect,
}) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const handleOptionClick = (option: Option) => {
    setMenuOpen(false);
    onSelect(option);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleMenu} className="dropdown-toggle" type="button">
        <span>{selectedOption.label}</span>
      </button>
      <ul className={`dropdown-menu ${menuOpen ? "open" : ""}`}>
        {options.map((option) => (
          <li key={option.orderLabel}>
            <button
              onClick={() => handleOptionClick(option)}
              className="dropdown-item"
            >
              {option.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
