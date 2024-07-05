import useWindowSize from './useWindowSize';

type ProductCategoryType = 'best' | 'forSale';

const getPageSize = ({ category, innerWidth }: { category: ProductCategoryType; innerWidth: number }) => {
  if (innerWidth < 768) {
    // Mobile viewport
    return category === 'best' ? 1 : 4;
  } else if (innerWidth < 1280) {
    // Tablet viewport
    return category === 'best' ? 2 : 6;
  } else {
    // Desktop viewport
    return category === 'best' ? 4 : 10;
  }
};

const usePageSize = (category: ProductCategoryType): number => {
  const { innerWidth } = useWindowSize();

  return getPageSize({ category, innerWidth });
};

export default usePageSize;
