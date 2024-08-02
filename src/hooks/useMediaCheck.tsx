import { useMediaQuery } from "react-responsive";

type UseMediaCheckResult = [
  boolean,  // isMediaQueryInValid
  boolean,  // isPc
  boolean,  // isTablet
  boolean   // isMobile
];

function useMediaCheck(): UseMediaCheckResult {
  const isPc = useMediaQuery({ query: "(min-width:1200px)" });
  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width:1199px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width:767px)" });

  const isMediaQueryInValid =
    !(isPc || isTablet || isMobile) ||
    (isPc && isTablet) ||
    (isTablet && isMobile);

  return [isMediaQueryInValid, isPc, isTablet, isMobile];
}

export default useMediaCheck;
