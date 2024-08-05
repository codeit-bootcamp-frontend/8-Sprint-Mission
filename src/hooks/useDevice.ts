import useMediaQuery from './useMediaQuery'

export const DEVICE = {
  DESKTOP: 'DESKTOP',
  TABLET: 'tablet',
  MOBILE: 'mobile',
} as const

function useDevice() {
  const isTablet = useMediaQuery('(min-width: 768px)')
  const isPc = useMediaQuery('(min-width: 1200px)')

  if (isPc) return DEVICE.DESKTOP
  if (isTablet) return DEVICE.TABLET
  return DEVICE.MOBILE
}

export default useDevice
