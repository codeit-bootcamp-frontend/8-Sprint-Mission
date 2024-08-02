import { useEffect, useState } from 'react';
import { FormObjectType } from 'types/@shared/addProductTypes';

const useAllFieldFilled = <T extends Record<string, FormObjectType>>(targetObject: T): boolean => {
  const [isAllFieldFilled, setIsAllFieldFilled] = useState(false);
  const values = Object.values(targetObject);

  useEffect(() => {
    const result = values.every(value => value.length > 0);

    setIsAllFieldFilled(result);
  }, [...values]);

  return isAllFieldFilled;
};

export default useAllFieldFilled;
