// components/Dropdown.js
import React, { useState } from "react";
import styles from "./Dropdown.module.scss";

function Dropdown({ selectedOption, onSortSelection, sortOptions }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
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
              onClick={() => {
                onSortSelection(option.key);
                setMenuOpen(false);
              }}
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
