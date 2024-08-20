import { RefObject } from 'react';
import { BtnText } from '@/f_shared/ui/';

import { colors } from '@/f_shared/config';

import * as S from './ConfirmModal.style';
import { useCloseRef } from '@/f_shared/lib';

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  confirmText?: string;
  cancelText?: string;
  onClose: () => void;
  onConfirm: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onCancel: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export const ConfirmModal = ({
  isOpen,
  children,
  onClose,
  confirmText = '확인',
  cancelText = '취소',
  onConfirm,
  onCancel,
}: ModalProps) => {
  const { ref } = useCloseRef({ onClose, isOpen });
  return (
    <S.Wrapper $isOpen={isOpen}>
      <S.ContentContainer ref={ref}>
        <S.Content>{children}</S.Content>
        <S.BtnContainer>
          <BtnText onClick={onCancel} textColor={colors.secondary[400]}>
            {cancelText}
          </BtnText>
          <BtnText onClick={onConfirm}>{confirmText}</BtnText>
        </S.BtnContainer>
      </S.ContentContainer>
    </S.Wrapper>
  );
};
