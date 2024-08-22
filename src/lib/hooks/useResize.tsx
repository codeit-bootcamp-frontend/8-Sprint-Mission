import { useEffect } from "react";
import countPageItems from "lib/utils/countPageItems";

const useResize = (
  setPageSize: (size: number) => void,
  pageSizes: { mobile: number; tablet: number; pc: number }
) => {
  const handleResize = () => {
    const newPageSize = countPageItems(
      pageSizes.mobile,
      pageSizes.tablet,
      pageSizes.pc
    );
    setPageSize(newPageSize);
  };

  useEffect(() => {
    handleResize(); // 컴포넌트가 마운트될 때 초기 사이즈 설정
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
};

export default useResize;
