import { useState } from 'react';

interface ModalControlProps<T = React.MouseEvent<HTMLElement, MouseEvent>> {
  cancelFn?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  confirmFn?: (e?: React.MouseEvent<T, MouseEvent>) => void;
}

export const useModal = <T = HTMLElement>({
  cancelFn = () => {},
  confirmFn = () => {},
}: ModalControlProps<T>) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClose = () => {
    setIsOpen(false);
  };

  const handleCancel = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    cancelFn(e);
    setIsOpen(false);
  };

  const handleConfirm = (e?: React.MouseEvent<HTMLElement, MouseEvent>) => {
    confirmFn();
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return { isOpen, onClose, handleCancel, handleConfirm, handleOpen };
};
