import { useState } from "react";
import useResize from "../../lib/hooks/useResize";

import ArrowDown from "../assets/icons/dropdown/arrow_down.svg";
import DropdownIcon from "../assets/icons/dropdown/down-icon.svg";

import DropdownMenu from "./DropdownMenu";

const Dropdown = ({ isLoading, order, handleListClick }) => {
  const getPageSize = (width) => {
    if (width < 768) {
      return 1;
    }
    return 0;
  };
  const size = useResize({ getPageSize });
  const [isDrop, setIsDrop] = useState(false);
  const handleDropdown = () => {
    setIsDrop(!isDrop);
  };

  const handleOrderClick = (e) => {
    handleListClick(e);
    setIsDrop(!isDrop);
  };
  return (
    <div className="dropdown-container">
      <button className="dropdown-btn" onClick={handleDropdown}>
        {size ? (
          <img src={DropdownIcon} alt="드랍다운 아이콘" />
        ) : (
          <div>
            <span>{order === "recent" ? "최신순" : "좋아요순"}</span>
            <img src={ArrowDown} alt="드랍다운 아이콘" />
          </div>
        )}
      </button>
      {isDrop && (
        <DropdownMenu
          isLoading={isLoading}
          handleListClick={handleOrderClick}
        />
      )}
    </div>
  );
};

export default Dropdown;
