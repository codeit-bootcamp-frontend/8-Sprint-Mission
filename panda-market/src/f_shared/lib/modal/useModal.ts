import { useState } from 'react';
import { useCloseRef } from '../close';

interface ModalControlProps {
  cancelFn?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  confirmFn?: <T = HTMLElement>(e: React.MouseEvent<T, MouseEvent>) => void;
}

export const useModal = ({
  cancelFn = () => {},
  confirmFn = () => {},
}: ModalControlProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClose = () => {
    setIsOpen(false);
  };

  const handleCancel = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    cancelFn(e);
    setIsOpen(false);
  };

  const handleConfirm = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    confirmFn(e);
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return { isOpen, onClose, handleCancel, handleConfirm, handleOpen };
};
