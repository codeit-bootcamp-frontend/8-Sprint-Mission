export const getPageSize = (
  mobile: number,
  tablet: number,
  desctop: number
) => {
  return window.innerWidth <= 400
    ? mobile
    : window.innerWidth <= 768
    ? tablet
    : desctop;
};
