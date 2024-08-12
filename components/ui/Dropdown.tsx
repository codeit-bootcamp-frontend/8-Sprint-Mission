import React, { useState } from "react";
import styles from "./Dropdown.module.scss";

interface Option {
  value: string;
  label: string;
}

interface DropdownProps {
  onSortSelection: (value: string) => void;
  selectedOption: Option;
  sortOptions: Option[];
}

function Dropdown({
  onSortSelection,
  selectedOption,
  sortOptions,
}: DropdownProps) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const handleOptionClick = (option: Option) => {
    onSortSelection(option.value);
    setMenuOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <button
        onClick={toggleMenu}
        className={styles["dropdown-toggle"]}
        type="button"
      >
        <span>{selectedOption.label}</span>
      </button>
      <ul
        className={`${styles["dropdown-menu"]} ${menuOpen ? styles.open : ""}`}
      >
        {sortOptions.map((option) => (
          <li key={option.value}>
            <button
              onClick={() => handleOptionClick(option)}
              className={styles["dropdown-item"]}
            >
              {option.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dropdown;
