import { useEffect, useState } from "react";

type Sizes = "large" | "medium" | "small";

function usePageSize() {
  const [sizeName, setSizeName] = useState<Sizes>("small");

  useEffect(() => {
    const mediaQueryLarge = window.matchMedia("(min-width: 1200px)");
    const mediaQueryMedium = window.matchMedia(
      "(min-width: 768px) and (max-width: 1199px)"
    );
    const mediaQuerySmall = window.matchMedia("(max-width: 767px)");

    const updateScreenSize = () => {
      if (mediaQueryLarge.matches) {
        setSizeName("large");
      } else if (mediaQueryMedium.matches) {
        setSizeName("medium");
      } else if (mediaQuerySmall.matches) {
        setSizeName("small");
      }
    };
    updateScreenSize();

    mediaQueryLarge.addEventListener("change", updateScreenSize);
    mediaQueryMedium.addEventListener("change", updateScreenSize);
    mediaQuerySmall.addEventListener("change", updateScreenSize);

    return () => {
      mediaQueryLarge.removeEventListener("change", updateScreenSize);
      mediaQueryMedium.removeEventListener("change", updateScreenSize);
      mediaQuerySmall.removeEventListener("change", updateScreenSize);
    };
  }, []);

  return { sizeName };
}

export default usePageSize;
