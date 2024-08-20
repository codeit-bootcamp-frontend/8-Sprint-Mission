import * as S from './AlertModal.style';

interface ModalProps {
  children: React.ReactNode;
}

export const AlertModal = ({ children }: ModalProps) => {
  return (
    <S.Wrapper>
      <S.ContentContainer></S.ContentContainer>
    </S.Wrapper>
  );
};
