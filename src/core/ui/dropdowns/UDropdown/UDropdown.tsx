import { OptionalPick } from '@/src/lib/utils/OptionalPick';
import { BasicType } from '@/src/types/BasicTypes';

import styles from './UDropdown.module.scss';

type UDropdownProps = OptionalPick<BasicType, '', ''>;

const UDropdown = ({}: UDropdownProps) => {
  return (
    <div className={styles.sortDropdown}>
      <div className={styles.parent}>
        <div className={styles.div}>최신순</div>
        <img
          className={styles.icArrowDownIcon}
          alt=""
          src="ic_arrow_down.svg"
        />
      </div>
    </div>
  );
};

export default UDropdown;
