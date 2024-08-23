import styles from './UIInput.module.scss';

import { BasicType } from '@type/BasicTypes';
import clsx from 'clsx';

type UIInputProps = Partial<
  Pick<
    BasicType,
    | 'placeholder'
    | 'keyword'
    | 'onChange'
    | 'onKeyDown'
    | 'className'
    | 'inputType'
  > & {
    id?: BasicType['inputId'];
    name?: BasicType['inputName'];
    ref?: BasicType['inputRef'];
    onBlur?: BasicType['inputRef'];
  }
>;

const UIInput = ({ ...props }: UIInputProps) => {
  return (
    <>
      <input
        className={clsx(styles['input'], props.className)}
        type={props.inputType}
        value={props.keyword}
        placeholder={props.placeholder || ''}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
      />
    </>
  );
};

export default UIInput;
