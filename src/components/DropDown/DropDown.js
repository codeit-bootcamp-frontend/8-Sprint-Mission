import { useState } from 'react';
import '../DropDown/DropDown.css';

export default function DropDown(props) {
  console.log(props.orderBy);
  const nowType = props.orderBy;
  const [isOpen, setIsOpen] = useState(false);
  const [select, setSelect] = useState(nowType);
  const toggle = () => setIsOpen(!isOpen);
  const optionClick = (option) => {
    setSelect(option);
    setIsOpen(false);
  };

  const getApiRecent = () => {
    props.handleOrderChange('recent');
  };

  const getApiFavorite = () => {
    props.handleOrderChange('favorite');
  };

  return (
    <div className="select-options" onClick={toggle}>
      <div className="select-text">{select === 'recent' ? '최신순' : '좋아요순'}</div>
      {isOpen && (
        <ul className="select-options-box">
          <li
            className="select-options-recent"
            onClick={() => {
              optionClick('최신순');
              getApiRecent();
            }}
          >
            최신순
          </li>
          <li
            className="select-options-favorite"
            onClick={() => {
              optionClick('좋아요순');
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
