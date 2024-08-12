import { clsx } from 'clsx';
import styles from './UButton.module.scss';

type UButtonProps = {
  buttonTagType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  type: 'box' | 'floating' | 'round';
  className?: string;
  handleClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  children: React.ReactNode;
  isDisalbed?: boolean;
  isLightTheme?: boolean;
  isSmallButton?: boolean;
};

const UButton = ({
  buttonTagType,
  type,
  className = '',
  handleClick,
  children,
  isDisalbed = false,
  isSmallButton = false,
}: UButtonProps) => {
  return (
    <>
      <button
        className={clsx(
          styles['common-button'],
          {
            [styles['box-button']]: type === 'box',
            [styles['box-button--small']]: type === 'box' && isSmallButton,
            [styles['floating-button']]: type === 'floating',
            [styles['floating-button--small']]:
              type === 'floating' && isSmallButton,
            [styles['round-button']]: type === 'round',
          },
          className
        )}
        onClick={handleClick}
        disabled={isDisalbed}
        type={buttonTagType}
      >
        {children}
      </button>
    </>
  );
};

export default UButton;
