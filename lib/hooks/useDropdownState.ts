import { SyntheticEvent, useEffect, useState } from "react";

function useDropdownState() {
  const [dropdownState, setDropdownState] = useState(0);

  const handleDropdown = (e: SyntheticEvent, dropdownNum: number) => {
    e.stopPropagation();
    if(dropdownState === 0) {
      setDropdownState(dropdownNum);
      return;
    }
    setDropdownState(0);
  }

  useEffect(() => {
    window.addEventListener("click", () => setDropdownState(0));
    return (() => {
      window.removeEventListener("click", () => setDropdownState(0));
    })
  });

  return { dropdownState, handleDropdown };
}

export default useDropdownState;