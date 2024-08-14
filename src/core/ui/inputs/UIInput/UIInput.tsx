import styles from './UIInput.module.scss';

import { BasicType } from '@type/BasicTypes';
import clsx from 'clsx';

type UIInputProps = Partial<
  Pick<
    BasicType,
    'placeholder' | 'keyword' | 'onChange' | 'onKeyDown' | 'className'
  >
>;

const UIInput = ({ ...props }: UIInputProps) => {
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

export default UIInput;
