import { useEffect, useRef } from 'react';

interface CloseProps {
  onClose: () => void;
  isOpen: boolean;
}

export const useCloseRef = ({ onClose, isOpen }: CloseProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleDropdownOutClose = (e: MouseEvent) => {
      if (isOpen && ref && !ref.current?.contains(e.target as Node)) {
        onClose();
      }
    };

    window.addEventListener('click', handleDropdownOutClose);

    return () => {
      window.removeEventListener('click', handleDropdownOutClose);
    };
  }, [isOpen, ref.current]);

  return { ref };
};
