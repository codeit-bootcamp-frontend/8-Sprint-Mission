import * as S from './SectionTitle.style';

interface SectionTitleProps {
  children: React.ReactNode;
}

export const SectionTitle = ({ children }: SectionTitleProps) => {
  return <S.Title>{children}</S.Title>;
};
