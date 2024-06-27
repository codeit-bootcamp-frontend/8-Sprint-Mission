import { useMediaQuery } from "react-responsive";

function useMediaCheck() {
  const isPc = useMediaQuery({ query: "(min-width:1200px)" });
  const isTablit = useMediaQuery({
    query: "(min-width:768px) and (max-width:1199px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width:767px" });

  return [isPc, isTablit, isMobile];
}

export default useMediaCheck;
