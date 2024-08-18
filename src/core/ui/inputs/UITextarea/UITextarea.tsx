import styles from './UITextarea.module.scss';

import { BasicType } from '@type/BasicTypes';
import clsx from 'clsx';

type UITextareaProps = Partial<
  Pick<
    BasicType,
    | 'placeholder'
    | 'keyword'
    | 'onTextareaChange'
    | 'onTextareaKeyDown'
    | 'className'
  >
>;

const UITextarea = ({ ...props }: UITextareaProps) => {
  return (
    <>
      <textarea
        className={clsx(styles['textarea'], props.className)}
        value={props.keyword}
        placeholder={props.placeholder || ''}
        onChange={props.onTextareaChange}
        onKeyDown={props.onTextareaKeyDown}
      />
    </>
  );
};

export default UITextarea;
