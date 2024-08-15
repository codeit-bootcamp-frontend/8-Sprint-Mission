import * as S from './Label.style';

interface LabelProps {
  children: React.ReactNode;
}

export const Label = ({ children }: LabelProps) => {
  return <S.Label>{children}</S.Label>;
};
