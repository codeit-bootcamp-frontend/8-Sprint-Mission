import { useState } from 'react';

const useToggle = (): [boolean, () => void] => {
  const [toggle, setToggle] = useState(false);

  const switchToggle = () => {
    setToggle((prevState) => !prevState);
  };

  return [toggle, switchToggle];
};

export default useToggle;
