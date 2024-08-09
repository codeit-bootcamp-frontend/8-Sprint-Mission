import { useEffect, useState } from "react";

export default function useMediaWidth() {
  const [mediaWidth, setMediaWidth] = useState<"desktop" | "tablet" | "mobile" | "none">("none");

  const handleWindowWidthChange = () => {
    if(window.innerWidth <= 767) setMediaWidth("mobile");
    else if(window.innerWidth <= 1199) setMediaWidth("tablet");
    else setMediaWidth("desktop");
  }

  useEffect(() => {
    handleWindowWidthChange();
    window.addEventListener("resize", handleWindowWidthChange);

    return (() => {
      window.removeEventListener("resize", handleWindowWidthChange);
    })
  }, [])

  return mediaWidth;
}