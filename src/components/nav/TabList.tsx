import { Link } from "react-router-dom";
import "./tablist.css";
interface TabSelected {
  board: boolean;
  items: boolean;
}
interface TabListProps {
  handleClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  isSelected: TabSelected;
}

const TabList = ({ handleClick, isSelected }: TabListProps) => {
  return (
    <ul onClick={handleClick} className="tab-list">
      <Link to="/board">
        <li className={`tab-item ${isSelected.board ? "selected" : ""}`}>
          자유게시판
        </li>
      </Link>
      <Link to="/items">
        <li className={`tab-item ${isSelected.items ? "selected" : ""}`}>
          중고마켓
        </li>
      </Link>
    </ul>
  );
};

export default TabList;
