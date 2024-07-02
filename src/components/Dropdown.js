import React, { useState } from 'react';

function Dropdown({ options, selectedOption, onSelect }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  const handleOptionClick = option => {
    setMenuOpen(false);
    onSelect(option);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleMenu} className="dropdown-toggle" type="button">
        <span>{selectedOption.label}</span>
      </button>
      <ul className={`dropdown-menu ${menuOpen ? 'open' : ''}`}>
        {options.map(option => (
          <li key={option.orderLabel}>
            <button onClick={() => handleOptionClick(option)} className="dropdown-item">
              {option.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dropdown;
