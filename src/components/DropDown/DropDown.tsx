import { useState } from "react";
import "../DropDown/DropDown.css";

interface DropDownProps {
  className?: string;
  orderBy: string;
  handleOrderChange: (order: string) => void;
}

export default function DropDown({ className, orderBy, handleOrderChange }: DropDownProps) {
  const nowType = orderBy;
  const [isOpen, setIsOpen] = useState(false);
  const [select, setSelect] = useState(nowType);
  const toggle = () => setIsOpen(!isOpen);
  const optionClick = (option: string) => {
    setSelect(option);
    setIsOpen(false);
  };

  const getApiRecent = () => {
    handleOrderChange("recent");
  };

  const getApiFavorite = () => {
    handleOrderChange("favorite");
  };

  return (
    <div className="select-options" onClick={toggle}>
      <div className="select-text">{select === "recent" ? "최신순" : "좋아요순"}</div>
      {isOpen && (
        <ul className="select-options-box">
          <li
            className="select-options-recent"
            onClick={() => {
              optionClick("recent");
              getApiRecent();
            }}
          >
            최신순
          </li>
          <li
            className="select-options-favorite"
            onClick={() => {
              optionClick("favorite");
              getApiFavorite();
            }}
          >
            좋아요순
          </li>
        </ul>
      )}
    </div>
  );
}
