import { useState } from "react";
import arrowDown from "../../assets/ic_arrow_down.png";
import SelectionList from "./SelectionList.js";

function Selection({ onSortMethodChange }) {
  const [dropDown, dropDownSet] = useState(<></>);
  const [sortMethod, sortMethodSet] = useState("최신순");

  const handleSortMethodClick = (sort) => {
    sortMethodSet(sort);
    onSortMethodChange(sort);
  };

  const handleDropDownClick = () => {
    if (dropDown.props.className === undefined)
      dropDownSet(SelectionList(handleSortMethodClick));
    if (dropDown.props.className === "sort-method") dropDownSet(<></>);
  };

  const handleDropDownBlur = (e) => {
    dropDownSet(<></>);
  };

  return (
    <div>
      <button
        className="drop-down-btn"
        type="button"
        onBlur={() => handleDropDownBlur()}
        onClick={() => handleDropDownClick()}
      >
        <span>{sortMethod}</span>
        <img src={arrowDown}></img>
      </button>
      <div className="select">{dropDown}</div>
    </div>
  );
}

export default Selection;
