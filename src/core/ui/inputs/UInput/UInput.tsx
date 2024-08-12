import styles from './UInput.module.scss';

import { OptionalPick } from '@/src/lib/utils/OptionalPick';
import { BasicType } from '@/src/types/BasicTypes';

type UInputProps = Partial<
  Pick<BasicType, 'placeholder' | 'keyword' | 'onChange' | 'onKeyDown'>
>;

const UInput = ({ ...props }: UInputProps) => {
  return (
    <>
      <input
        className={styles['input']}
        value={props.keyword}
        placeholder={props.placeholder || ''}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
      />
    </>
  );
};

export default UInput;
