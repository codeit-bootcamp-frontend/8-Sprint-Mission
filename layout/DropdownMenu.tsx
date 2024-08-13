import { useState } from 'react';
import s from './DropdownMenu.module.scss';
import sortIcon from '@/public/svg/ic_sort.svg';
import Image from 'next/image';

type dropdownMenu = {
  onSortSelection: (sortOption: ArticleSortOption) => void;
  sortOptions: { key: ArticleSortOption; label: string }[];
};

function DropdownMenu({ onSortSelection, sortOptions }: dropdownMenu) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className={s.wrap}>
      <button type='button' className={s.dropdown} onClick={toggleDropdown}>
        <Image src={sortIcon} alt='정렬' />
      </button>

      {isDropdownVisible && (
        <div className={s.menu}>
          {sortOptions.map((option) => (
            <div
              key={option.key}
              onClick={() => {
                onSortSelection(option.key);
                setIsDropdownVisible(false);
              }}>
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
