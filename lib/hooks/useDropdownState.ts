import { useEffect, useState } from "react";

function useDropdownState() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownClicked, setIsDropdownClicked] = useState(false);
  const [isDocumentClicked, setIsDocumentClicked] = useState(false);

  const handleDropdown = () => {
    setIsDropdownClicked(true);
  }

  const handleDocumentClick = () => {
    setIsDocumentClicked(true);
  }

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return (() => {
      document.addEventListener("click", handleDocumentClick);
    })
  }, []);

  useEffect(() => {
    if(isDropdownClicked) setIsDropdownOpen(!isDropdownOpen);
  }, [isDropdownClicked]);

  useEffect(() => {
    if(!isDocumentClicked) return;
    
    if(isDropdownClicked) {
      setIsDropdownClicked(false);
      setIsDocumentClicked(false);
      return;
    }
    setIsDropdownOpen(false);
    setIsDocumentClicked(false);
  }, [isDocumentClicked]);

  return { isDropdownOpen, handleDropdown };
}

export default useDropdownState;