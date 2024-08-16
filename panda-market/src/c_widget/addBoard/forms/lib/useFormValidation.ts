import { useEffect, useState } from 'react';

import { InputValues } from './useInputValue';

interface FormValidationProps {
  inputValues: InputValues;
}

export const useFormValidation = ({ inputValues }: FormValidationProps) => {
  const [validation, setValidation] = useState<boolean>(false);
  useEffect(() => {
    if (inputValues.title.length > 0 && inputValues.content.length > 0) {
      setValidation(true);
    }
  }, [inputValues.title, inputValues.content]);

  return { validation };
};
