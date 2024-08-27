import styles from './Input.module.scss';

import clsx from 'clsx';
import { BasicType } from '@type/BasicTypes';
import { forwardRef, InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> &
  Partial<Pick<BasicType, 'label' | 'errorMessage'>>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, errorMessage, ...props }, ref) => {
    return (
      <div className={styles['item']}>
        {label && <label className={styles['label']}>{label}</label>}
        <input
          className={clsx(styles['input'], {
            [styles['input--error']]: errorMessage,
          })}
          ref={ref}
          {...props}
        />
        {errorMessage && (
          <p className={styles['input__errorMessage']}>{errorMessage}</p>
        )}
      </div>
    );
  }
);

Input.displayName = `Input`; // forwardRef 사용 시 displayName 설정

export default Input;
