import { useEffect, useState } from "react";

const useResize = ({
  getPageSize,
}: {
  getPageSize: (width: number) => number | number;
}) => {
  const [size, setSize] = useState(getPageSize(window.innerWidth));

  const handleResize = () => {
    const newWindowSize = getPageSize(window.innerWidth);
    setSize(newWindowSize);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return { size };
};

export default useResize;
