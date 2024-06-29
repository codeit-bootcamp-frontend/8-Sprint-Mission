import "./dropdown.css";

interface DropdownMenuProps {
  isLoading: boolean;
  handleListClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const DropdownMenu = ({ isLoading, handleListClick }: DropdownMenuProps) => {
  const className = `dropdown-menu ${isLoading ? ".disabled" : ""}`;
  return (
    <ul className={className} onClick={handleListClick}>
      <li className="recent-order">최신순</li>
      <li className="favorite-order">좋아요순</li>
    </ul>
  );
};

export default DropdownMenu;
