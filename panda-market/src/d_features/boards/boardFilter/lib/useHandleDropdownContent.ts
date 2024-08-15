import { useState } from 'react';
import { BoardDropdownContentType } from '@/f_shared/config';

export const useHandleDropdownContent = () => {
  const [dropdownValue, setDropdownValue] =
    useState<BoardDropdownContentType>('최신순');

  const handleDropdownListClick = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => {
    const target = e.target as HTMLElement;
    setDropdownValue(target.dataset['name'] === 'like' ? '좋아요순' : '최신순');
  };

  return { dropdownValue, handleDropdownListClick };
};
