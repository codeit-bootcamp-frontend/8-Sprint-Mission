import { useState } from 'react';

export interface InputValues {
  title: string;
  content: string;
  image: File | null;
}

const INITIAL_VALUES = {
  title: '',
  content: '',
  image: null,
};

export const useInputValue = () => {
  const [inputValues, setInputValues] = useState<InputValues>(INITIAL_VALUES);

  const handleInputValuesChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const target = e.target;
    const targetName = target.name;

    if (targetName === 'image') {
      const target = e.target as HTMLInputElement;
      setInputValues((prev) => ({ ...prev, [targetName]: target.files![0] }));
    } else {
      setInputValues((prev) => ({ ...prev, [targetName]: target.value }));
    }
  };

  const handleImageDelete = () => {
    setInputValues((prev) => ({ ...prev, image: null }));
  };

  return { inputValues, handleInputValuesChange, handleImageDelete };
};
