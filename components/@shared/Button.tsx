import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './Button.module.scss';

type ButtonCategoryType = 'medium' | 'large';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  category?: ButtonCategoryType; // Styled-component 에서만 사용될 prop은 $를 붙여주지 않으면 콘솔창에 경고가 발생
  type?: 'submit' | 'button' | 'reset';
}

function Button({
  children,
  category = 'medium',
  onClick,
  type,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      className={classNames(styles.button, styles[category], {
        [styles.disabled]: disabled
      })}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
