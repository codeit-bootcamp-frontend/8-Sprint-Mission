const colors = {
  brandBlue: "#3692ff",
  gray00: "#ffffff",
  gray50: "#f9fafb",
  gray100: "#f3f4f6",
  gray200: "#e5e7eb",
  gray300: "#d1d5db",
  gray400: "#9ca3af",
  gray500: "#6b7280",
  gray600: "#4b5563",
  gray700: "#374151",
  gray800: "#1f2937",
  gray900: "#111827",
  errorRed: "#f74747",
  headerUnderline: "#dfdfdf",
  simpleLogin: "e6f2ff",
  mainBgColor: "#cfe5ff",
};

const deviceSizes = {
  MOBILE_MIN_WIDTH: 375,
  MOBILE_MAX_WIDTH: 767,
  TABLET_MIN_WIDTH: 768,
  TABLET_MAX_WIDTH: 1199,
  DESKTOP_MIN_WIDTH: 1200,
};

const mediaQueries = {
  mobile: `(min-width: ${deviceSizes.MOBILE_MIN_WIDTH}px and max-width: ${deviceSizes.MOBILE_MAX_WIDTH}px)`,
  tablet: `(min-width: ${deviceSizes.TABLET_MIN_WIDTH}px and max-width: ${deviceSizes.TABLET_MAX_WIDTH}px)`,
  desktop: `(min-width: ${deviceSizes.DESKTOP_MIN_WIDTH})px`,
};

type ColorsType = typeof colors;
type mediaQueriesType = typeof mediaQueries;

const theme: { colors: ColorsType; mediaQueries: mediaQueriesType } = {
  colors,
  mediaQueries,
};

export default theme;
