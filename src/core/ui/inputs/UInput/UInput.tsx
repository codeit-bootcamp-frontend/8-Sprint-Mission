import { OptionalPick } from '@/src/lib/utils/OptionalPick';
import styles from './UInput.module.scss';
import { BasicType } from '@/src/types/BasicTypes';

type UInputProps = OptionalPick<BasicType, '', ''>;

const UInput = ({}: UInputProps) => {
  return (
    <>
      <div className={styles.search}>
        <div className={styles.icSearchParent}>
          <img className={styles.icSearchIcon} alt="" src="ic_search.svg" />
          <div className={styles.div}>검색할 상품을 입력해주세요</div>
        </div>
      </div>
    </>
  );
};

export default UInput;
