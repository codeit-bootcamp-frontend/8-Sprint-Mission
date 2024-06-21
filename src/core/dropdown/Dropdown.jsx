import { useState } from "react";

import ArrowDown from "../assets/icons/dropdown/arrow_down.svg";
import DropdownMenu from "./DropdownMenu";

const Dropdown = ({ isLoading, order, handleListClick }) => {
  const [isDrop, setIsDrop] = useState(false);
  const handleDropdown = () => {
    setIsDrop(!isDrop);
  };
  return (
    <div className="dropdown-container">
      <button className="dropdown-btn" onClick={handleDropdown}>
        <span>{order === "recent" ? "최신순" : "좋아요순"}</span>
        <img src={ArrowDown} alt="드랍다운 아이콘" />
      </button>
      {isDrop && (
        <DropdownMenu isLoading={isLoading} handleListClick={handleListClick} />
      )}
    </div>
  );
};

export default Dropdown;
