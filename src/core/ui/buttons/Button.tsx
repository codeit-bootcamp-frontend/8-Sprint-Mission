import { useEffect, useRef } from 'react';

interface ButtonProps {
  text?: string;
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  isDisabled?: boolean;
  iconFront?: React.ReactNode;
  iconBack?: React.ReactNode;
  isPill?: boolean;
}

function Button({
  text = '버튼',
  onClick = () => {},
  isDisabled = false,
  iconFront,
  iconBack,
  isPill = false,
}: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.disabled = isDisabled;
    }
  }, [isDisabled]);

  const baseClasses =
    'bg-blue-500 text-white font-semibold inline-flex items-center justify-center text-base border-none outline-none shadow-none cursor-pointer leading-normal';
  const hoverClasses = 'hover:bg-blue-600';
  const focusClasses = 'focus:bg-blue-700';
  const disabledClasses =
    'disabled:bg-gray-400 disabled:cursor-default disabled:pointer-events-none';
  const roundedClasses = isPill
    ? 'rounded-full px-8 py-3.5'
    : 'rounded-lg px-6 py-3';

  return (
    <button
      className={`${baseClasses} ${hoverClasses} ${focusClasses} ${disabledClasses} ${roundedClasses}`}
      onClick={onClick}
      ref={ref}
    >
      {iconFront}
      {text}
      {iconBack}
    </button>
  );
}

export default Button;
