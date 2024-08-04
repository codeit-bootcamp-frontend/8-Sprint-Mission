import { useEffect, useRef } from 'react';
import './Button.css';

interface ButtonProps {
  text?: string;
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  isDisabled?: boolean;
  iconFront?: React.ReactNode;
  iconBack?: React.ReactNode;
}

function Button({
  text = '버튼',
  onClick = () => {},
  isDisabled = false,
  iconFront,
  iconBack,
}: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.disabled = isDisabled;
    }
  }, [isDisabled]);

  return (
    <>
      <button className="btn-default" onClick={onClick} ref={ref}>
        {iconFront}
        {text}
        {iconBack}
      </button>
    </>
  );
}
export default Button;
