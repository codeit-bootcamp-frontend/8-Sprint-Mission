import { useCallback, useEffect, useState } from "react";

interface useResizeProps {
  pcSize: number;
  tabletSize: number;
  mobileSize: number;
}

const useResize = ({ pcSize, tabletSize, mobileSize }: useResizeProps) => {
  const getPageSize = useCallback(
    (width: number) => {
      if (1200 <= width) {
        return pcSize;
      }
      if (768 <= width) {
        return tabletSize;
      }
      return mobileSize;
    },
    [pcSize, tabletSize, mobileSize]
  );

  const [size, setSize] = useState(getPageSize(window.innerWidth));

  const handleResize = useCallback(() => {
    const newWindowSize = getPageSize(window.innerWidth);
    setSize(newWindowSize);
  }, [getPageSize]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);
  return { size };
};

export default useResize;
