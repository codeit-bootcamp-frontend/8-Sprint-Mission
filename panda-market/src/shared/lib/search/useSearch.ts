import { useState } from 'react';

export const useSearch = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [keyword, setKeyword] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(searchValue);
    setSearchValue(e.target.value);
  };

  const handleKeyboardSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setKeyword(searchValue);
    }
  };

  return { keyword, searchValue, handleChange, handleKeyboardSubmit };
};
