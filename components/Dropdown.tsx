import { useState } from "react";
import styles from "./Dropdown.module.css";
import Image from "next/image";
import arrowDownIcon from "@/assets/images/ic_arrow_down.png";

interface Option {
  label: string;
  value: string;
}

interface DropdownProps {
  options: Option[];
  onOptionChange: (value: string) => void;
}

function Dropdown({ options, onOptionChange }: DropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>("최신순");

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (value: string, label: string) => {
    onOptionChange(value);
    setSelectedValue(label);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdownWrapper}>
      <div className={styles.dropdownToggle} onClick={handleDropdownClick}>
        {selectedValue}
        <Image
          src={arrowDownIcon}
          alt="드롭다운 아이콘"
          width={24}
          height={24}
        />
      </div>

      {isOpen && (
        <ul className={styles.dropdownOptions}>
          {options.map((option: Option) => (
            <li
              className={styles.dropdownOption}
              key={option.value}
              onClick={() => handleOptionSelect(option.value, option.label)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
