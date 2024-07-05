import useWindowSize from './useWindowSize';

type ProductCategoryType = 'best' | 'forSale';

const getPageSize = ({ catagory, innerWidth }: { catagory: ProductCategoryType; innerWidth: number }) => {
  if (innerWidth < 768) {
    // Mobile viewport
    return catagory === 'best' ? 1 : 4;
  } else if (innerWidth < 1280) {
    // Tablet viewport
    return catagory === 'best' ? 2 : 6;
  } else {
    // Desktop viewport
    return catagory === 'best' ? 4 : 10;
  }
};

const usePageSize = (catagory: ProductCategoryType): number => {
  const { innerWidth } = useWindowSize();

  return getPageSize({ catagory, innerWidth });
};

export default usePageSize;
