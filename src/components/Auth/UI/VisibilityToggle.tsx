import React, { useState } from "react";
import visiblityOnIc from "assets/icons/ic_visibility_on.png";
import visiblityOffIc from "assets/icons/ic_visibility_off.png";

interface VisibilityToggleProps {
  onToggle: (isVisible: boolean) => void;
}

function VisibilityToggle({ onToggle }: VisibilityToggleProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleToggle = () => {
    const newVisibility = !isVisible;
    setIsVisible(newVisibility);
    onToggle(newVisibility);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="absolute top-16 right-6 w-6 h-6 transform translate-y-2"
    >
      <img
        src={isVisible ? visiblityOnIc : visiblityOffIc}
        className="w-6 h-6"
        alt="가시성 아이콘"
      />
    </button>
  );
}

export default VisibilityToggle;
