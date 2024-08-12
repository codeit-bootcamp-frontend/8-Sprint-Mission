// count items according to pageSize
const countPageItems = (mobile: number, tablet: number, pc: number): number => {
  if (window.innerWidth < 768) {
    return mobile;
  } else if (window.innerWidth < 1280) {
    return tablet;
  } else {
    return pc;
  }
};

export default countPageItems;
