import { useEffect, useState } from "react";

type Sizes = "large" | "medium" | "small";

function usePageSize() {
  const [sizeName, setSizeName] = useState<Sizes>("small");

  const sizeNaming = () => {
    if (window.innerWidth >= 1200) {
      setSizeName("large");
    } else if (window.innerWidth < 1200 && window.innerWidth >= 765) {
      setSizeName("medium");
    } else if (window.innerWidth < 765) {
      setSizeName("small");
    }
  };

  let timer = false; // 디바운싱으로 변경 예정, window.matchMedia 찾아보기
  const onResize = () => {
    if (!timer) {
      timer = true;
      sizeNaming();
      setTimeout(() => {
        timer = false;
      }, 50);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    sizeNaming();
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return { sizeName };
}

export default usePageSize;
