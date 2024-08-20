import styles from './OrderByDropdown.module.scss';
import sortIcon from '@/public/images/market/sort-icon.png';
import dropDownIcon from '@/public/images/market/order-dropdown.png';
import { DEVICE_MAX_WIDTH } from '@/constants/mediaQuerySize';
import Image from 'next/image';

import useToggle from '@/hooks/customs/useToggle';
import { useState } from 'react';
import useInnerWidth from '@/hooks/customs/useInnerWidth';

interface OrderByDropdownProps {
  onMenuClick: (orderBy: string) => void;
}

const orderByList = [
  { name: '최신순', value: 'recent' },
  { name: '좋아요순', value: 'like' },
];

function OrderByDropdown({ onMenuClick }: OrderByDropdownProps) {
  const innerWidth = useInnerWidth();
  const [isDropdownOpen, toggleDropdown] = useToggle();
  const [selectedItem, setSelectedItem] = useState(orderByList[0]);

  const handleMenuClick = (event: React.MouseEvent<HTMLUListElement>) => {
    const { name, value } = (event.target as HTMLUListElement).dataset;
    if (name && value) {
      onMenuClick(value);
      setSelectedItem({ name, value });
    }
    toggleDropdown();
  };

  return (
    <div className={styles.dropdownWrapper}>
      <div className={styles.dropdownTrigger} onClick={toggleDropdown}>
        {innerWidth > DEVICE_MAX_WIDTH.mobile && <span>{selectedItem.name}</span>}
        <Image
          src={innerWidth > DEVICE_MAX_WIDTH.mobile ? dropDownIcon : sortIcon}
          alt={'드롭다운 열기 아이콘'}
          height={24}
          width={24}
        />
      </div>
      {isDropdownOpen && (
        <ul className={styles.dropdownMenu} onClick={handleMenuClick}>
          {orderByList.map((item) => (
            <li key={item.value} data-name={item.name} data-value={item.value}>
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default OrderByDropdown;
