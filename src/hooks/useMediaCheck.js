import { useMediaQuery } from "react-responsive";

/**
 * width에 따라서 media query를 통해 pc, tablet, mobile인지 체크하는 hook
 * @returns [isMediaQueryInValid, isPc, isTablet, isMobile]
 */
function useMediaCheck() {
  const isPc = useMediaQuery({ query: "(min-width:1200px)" });
  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width:1199px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width:767px)" });

  // media query 값이 2개가 동시에 true가 되거나 모두 false가 되는 경우
  // 해당 값이 false, 정상적인 경우 true가 됨
  const isMediaQueryInValid =
    !(isPc || isTablet || isMobile) ||
    (isPc && isTablet) ||
    (isTablet && isMobile);

  return [isMediaQueryInValid, isPc, isTablet, isMobile];
}

export default useMediaCheck;
