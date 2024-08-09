import { useState } from 'react';

export const useSearch = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleKeyboardSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'enter' && searchValue !== '') {
    }
  };

  return { searchValue, handleChange, handleKeyboardSubmit };
};
