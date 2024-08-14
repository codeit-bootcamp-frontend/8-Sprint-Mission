import React, { useState } from "react";
import Image from "next/image";
import styles from "./Dropdown.module.css";

interface DropdownProps {
  options: { label: string; value: string }[];
  selectedValue: string;
  onSelect: (value: string) => void;
}

const Dropdown = ({ options, selectedValue, onSelect }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // 옵션 선택 시 실행되는 함수
  const handleSelect = (value: string) => {
    onSelect(value);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdownBox}>
      <div className={styles.dropdownToggle} onClick={toggleDropdown}>
        <div className={styles.optionText}>
          {options.find((option) => option.value === selectedValue)?.label}
        </div>
        <Image
          className={styles.arrowImage}
          src="/ic_arrow_down.png"
          alt="드롭다운 아이콘"
          width={24}
          height={24}
        />
        <Image
          className={styles.sortImage}
          src="/ic_sort.png"
          alt="드롭다운 아이콘"
          width={24}
          height={24}
        />
      </div>

      {isOpen && (
        <ul className={styles.dropdownMenu}>
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
