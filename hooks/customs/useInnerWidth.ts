import { DEVICE_MAX_WIDTH } from '@/constants/mediaQuerySize';
import { useEffect, useState } from 'react';

const useInnerWidth = (): number => {
  const [innerWidth, setInnerWidth] = useState(DEVICE_MAX_WIDTH.tablet);

  const handleResize = () => {
    setInnerWidth(window.innerWidth);
  };

  useEffect(() => {
    if (!window) return;

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return innerWidth;
};

export default useInnerWidth;
