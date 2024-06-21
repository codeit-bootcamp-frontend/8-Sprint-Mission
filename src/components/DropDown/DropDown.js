import { useState } from 'react';
import '../DropDown/DropDown.css';

export default function DropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const [select, setSelect] = useState('최신순');

  const toggle = () => setIsOpen(!isOpen);
  const optionClick = (option) => {
    setSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="select-options" onClick={toggle}>
      <div className="select-text">{select}</div>
      {isOpen && (
        <ul className="select-options-box">
          <li className="select-options-recent" onClick={() => optionClick('최신순')}>
            최신순
          </li>
          <li className="select-options-favorite" onClick={() => optionClick('좋아요순')}>
            좋아요순
          </li>
        </ul>
      )}
    </div>
  );
}
