import { useEffect, useState } from 'react';

type ProductCategoryType = 'best' | 'forSale';

const getPageSize = (catagory: ProductCategoryType) => {
  const width = window.innerWidth;
  if (width < 768) {
    // Mobile viewport
    return catagory === 'best' ? 1 : 4;
  } else if (width < 1280) {
    // Tablet viewport
    return catagory === 'best' ? 2 : 6;
  } else {
    // Desktop viewport
    return catagory === 'best' ? 4 : 10;
  }
};

const usePageSize = (catagory: ProductCategoryType): number => {
  const [pageSize, setPageSize] = useState(catagory === 'best' ? 4 : 10);

  const handleResize = () => {
    setPageSize(getPageSize(catagory));
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return pageSize;
};

export default usePageSize;
