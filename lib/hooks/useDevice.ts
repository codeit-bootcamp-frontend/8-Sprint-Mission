import useMediaQuery from './useMediaQuery';

export const DEVICE = {
  desktop: 'desktop',
  tablet: 'tablet',
  mobile: 'mobile',
} as const;

function useDevice() {
  const isTablet = useMediaQuery('(min-width: 768px)');
  const isPc = useMediaQuery('(min-width: 1200px)');

  if (isPc) return DEVICE.desktop;
  if (isTablet) return DEVICE.tablet;
  return DEVICE.mobile;
}

export default useDevice;
