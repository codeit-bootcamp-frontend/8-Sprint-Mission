import { useState } from "react";
import { Link } from "react-router-dom";
import "./tablist.css";

interface TabSelected {
  board: boolean;
  items: boolean;
}

const INITIAL_SELECTED = {
  board: false,
  items: false,
};

const TabList = () => {
  const [isSelected, setIsSelected] = useState<TabSelected>(INITIAL_SELECTED);

  const boardClassName = `tab-item ${isSelected.board ? "selected" : ""}`;
  const itemsClassName = `tab-item ${isSelected.items ? "selected" : ""}`;

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const name =
      (e.target as HTMLElement).innerText === "자유게시판" ? "board" : "items";
    setIsSelected(() => {
      const newSelected = INITIAL_SELECTED;
      newSelected[name] = true;
      return newSelected;
    });
  };

  return (
    <ul onClick={handleClick} className="tab-list">
      <Link to="/board">
        <li className={boardClassName}>자유게시판</li>
      </Link>
      <Link to="/items">
        <li className={itemsClassName}>중고마켓</li>
      </Link>
    </ul>
  );
};

export default TabList;
