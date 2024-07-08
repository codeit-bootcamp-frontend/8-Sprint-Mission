import React, { useEffect, useState } from "react";

function useDetectViewport() {
  const [sizeName, setSizeName] = useState(
    window.innerWidth > 1200
      ? "large"
      : window.innerWidth > 765
      ? "medium"
      : "small"
  );
  const sizeNaming = () => {
    if (window.innerWidth >= 1200) {
      setSizeName("large");
    } else if (window.innerWidth < 1200 && window.innerWidth >= 765) {
      setSizeName("medium");
    } else if (window.innerWidth < 765) {
      setSizeName("small");
    }
  };

  let timer = false;
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
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return sizeName;
}

export default useDetectViewport;
