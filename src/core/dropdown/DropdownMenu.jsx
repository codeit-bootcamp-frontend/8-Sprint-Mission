import "./dropdown.css";

const DropdownMenu = ({ isLoading, handleListClick }) => {
  return (
    <ul
      className="dropdown-menu"
      disabled={isLoading}
      onClick={handleListClick}
    >
      <li className="recent-order">최신순</li>
      <li className="favorite-order">좋아요순</li>
    </ul>
  );
};

export default DropdownMenu;
