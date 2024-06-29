import { useState } from "react";
import useResize from "../../lib/hooks/useResize";

import ArrowDown from "../assets/icons/dropdown/arrow_down.svg";
import DropdownIcon from "../assets/icons/dropdown/down-icon.svg";

import DropdownMenu from "./DropdownMenu";

interface DropdownProps {
  isLoading: boolean;
  order: string;
  handleListClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const Dropdown = ({ isLoading, order, handleListClick }: DropdownProps) => {
  const { size } = useResize({
    pcSize: 0,
    tabletSize: 0,
    mobileSize: 1,
  });
  const [isDrop, setIsDrop] = useState<boolean>(false);
  const handleDropdown = () => {
    setIsDrop(!isDrop);
  };

  const handleOrderClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    handleListClick(e);
    setIsDrop(!isDrop);
  };
  return (
    <div className="dropdown-container">
      <button className="dropdown-btn" onClick={handleDropdown}>
        {size ? (
          <img src={DropdownIcon} alt="드랍다운 아이콘" />
        ) : (
          <>
            <span>{order === "recent" ? "최신순" : "좋아요순"}</span>
            <img src={ArrowDown} alt="드랍다운 아이콘" />
          </>
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
