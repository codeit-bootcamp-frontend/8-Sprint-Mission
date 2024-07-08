import { useEffect, useState } from 'react';
import { ObjectType } from 'types/@shared/addProductTypes';

const useAllFieldFilled = <T extends Record<string, ObjectType>>(object: T): boolean => {
  const [isAllFieldFilled, setIsAllFieldFilled] = useState(false);
  const values = Object.values(object);

  useEffect(() => {
    const result = values.every(value => value.length > 0);

    setIsAllFieldFilled(result);
  }, [...values]);

  return isAllFieldFilled;
};

export default useAllFieldFilled;
