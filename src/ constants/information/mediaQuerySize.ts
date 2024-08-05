export const DEVICE_MAX_WIDTH = {
  tablet: 1280,
  mobile: 768,
};

export const MEDIA_QUERY_SIZE = {
  desktop: `(min-width: ${DEVICE_MAX_WIDTH.tablet}px)`,
  tablet: `(min-width: ${DEVICE_MAX_WIDTH.mobile}px) and (max-width: ${DEVICE_MAX_WIDTH.tablet}px)`,
  underTablet: `(max-width: ${DEVICE_MAX_WIDTH.tablet}px)`,
  mobile: `(max-width: ${DEVICE_MAX_WIDTH.mobile}px)`,
};
