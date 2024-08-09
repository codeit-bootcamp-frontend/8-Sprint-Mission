import { ReactNode } from 'react';
import Link from 'next/link';
import styles from './LinkButton.module.css';

type ButtonType = 'button' | 'submit' | 'reset';

interface LinkButtonProps {
  href?: string;
  type?: ButtonType;
  btnName?: ReactNode;
  isActive?: boolean;
  className?: string;
}

export default function LinkButton({
  href,
  type,
  btnName,
  isActive,
  className,
}: LinkButtonProps) {
  if (href) {
    return (
      <div className={`${styles.btnContainer} ${className}`}>
        <Link className={styles.button} href={href}>
          {btnName}
        </Link>
      </div>
    );
  }

  return (
    <>
      <button
        className={`${styles.button} ${className}`}
        disabled={isActive}
        type={type}
      >
        {btnName}
      </button>
    </>
  );
}
