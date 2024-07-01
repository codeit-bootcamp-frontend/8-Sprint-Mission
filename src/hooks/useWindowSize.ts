import { useEffect, useState } from 'react';

// 반환값들은 나중에 필요하면 추가하면 됨, 가져다 쓸 때는 사용할 것만 가져가면 됨
interface WindowSizeObject {
  innerWidth: number;
  innerHeight: number;
}

const useWindowSize = (): WindowSizeObject => {
  const [windowSize, setWindowSize] = useState<WindowSizeObject>({
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
};

export default useWindowSize;
