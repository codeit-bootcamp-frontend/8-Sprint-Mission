import "./nav.css";

const TabList = ({ onClick }) => {
  return (
    <ul onClick={onClick} className="tab-list">
      <li className="tab-item">자유게시판</li>
      <li className="tab-item selected">중고마켓</li>
    </ul>
  );
};

export default TabList;
