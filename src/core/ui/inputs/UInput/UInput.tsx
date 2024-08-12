import styles from './UInput.module.scss';

import { BasicType } from '@/src/types/BasicTypes';
import clsx from 'clsx';

type UInputProps = Partial<
  Pick<
    BasicType,
    'placeholder' | 'keyword' | 'onChange' | 'onKeyDown' | 'className'
  >
>;

const UInput = ({ ...props }: UInputProps) => {
  return (
    <>
      <input
        className={clsx(styles['input'], props.className)}
        value={props.keyword}
        placeholder={props.placeholder || ''}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
      />
    </>
  );
};

export default UInput;
