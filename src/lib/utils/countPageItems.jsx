// count items according to pageSize
const countPageItems = (mobile, tablet, pc) => {
  if (window.innerWidth < 768) {
    return mobile;
  } else if (window.innerWidth < 1200) {
    return tablet;
  } else {
    return pc;
  }
};

export default countPageItems;
