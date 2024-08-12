import styles from './UDropdown.module.scss';

import { useState } from 'react';
import { BasicType } from '@/src/types/BasicTypes';
import IconSort from '@/src/assets/images/icons/ic_sort.svg';
import Image from 'next/image';

type UDropdownProps = Pick<BasicType, 'options' | 'onSortSelection'>;

const UDropdown = ({ ...props }: UDropdownProps) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);

  const toggleDropdownVisible = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className={styles['dropdown__wrapper']}>
      <button
        className={styles['dropdown__button']}
        onClick={toggleDropdownVisible}
      >
        <Image src={IconSort} alt="정렬 아이콘" />
      </button>
      {isDropdownVisible && (
        <div className={styles['dropdown__itemList']}>
          {props.options?.map((option) => (
            <div
              className={styles['dropdown__item']}
              key={option.key}
              onClick={() => {
                props.onSortSelection(option.key);
                setIsDropdownVisible(false);
              }}
            >
              {option.value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UDropdown;
