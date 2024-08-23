import { useState } from 'react';

import visibilityIcon from '../../core/assets/icons/visibility/visibility.svg';
import disvisibilityIcon from '../../core/assets/icons/visibility/disvisibility.svg';

const usePasswordVisibility = () => {
  const [icon, setIcon] = useState<string>(visibilityIcon);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handlePasswordVisibility = () => {
    setIsVisible((prev) => !prev);
    setIcon((prev) =>
      prev === visibilityIcon ? disvisibilityIcon : visibilityIcon,
    );
  };
  return { isVisible, icon, handlePasswordVisibility };
};

export default usePasswordVisibility;
