import useCurrentDevice from "@/hooks/useCurrentDevice";

/**
 * 현재 device에 따라 pageSize를 정해주는 커스텀 훅
 * @param mobilePageSize
 * @param tabletPageSize
 * @param desktopPageSize
 * @returns 입력한 pageSize중 알맞은 값을 return
 */
export default function usePageSize(
  mobilePageSize: number,
  tabletPageSize: number,
  desktopPageSize: number
) {
  const currentDevice = useCurrentDevice();
  if (currentDevice === "desktop") {
    return desktopPageSize;
  } else if (currentDevice === "tablet") {
    return tabletPageSize;
  } else if (currentDevice === "mobile") {
    return mobilePageSize;
  }
  return mobilePageSize;
}
