import { useState } from 'react';
import { useCloseRef } from '../close';

interface DropdownParams {
  onContentClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export const useDropdown = ({ onContentClick }: DropdownParams) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  const { ref } = useCloseRef({ isOpen, onClose: handleClose });

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleContentClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    onContentClick(e);
    handleClose();
  };

  return { isOpen, closeRef: ref, handleClick, handleContentClick };
};
